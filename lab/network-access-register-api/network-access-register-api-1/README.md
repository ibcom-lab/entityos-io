# ip-space-logger — AWS Lambda (Node.js)

A serverless Lambda function that:
- **GET** → returns a styled HTML form (with entityOS logo) for submitting an IP address + Space ID
- **POST** → validates the Space ID against `settings.json`, validates the IP address format, and records the entry to a JSON data store

---

## Files

| File              | Purpose                                      |
|-------------------|----------------------------------------------|
| `index.js`        | Lambda handler (GET + POST routes)            |
| `settings.json`   | Space definitions (id, name, active flag)    |
| `package.json`    | Package metadata                             |
| `test-local.js`   | Local test runner (no dependencies needed)   |

---

## Local Testing

```bash
node test-local.js
```

No `npm install` needed — the function has **zero external dependencies**.

---

## Deploying to AWS Lambda

### 1. Package

```bash
zip -r ip-space-logger.zip index.js settings.json
```

### 2. Create the Lambda (Console or CLI)

**Via CLI:**
```bash
aws lambda create-function \
  --function-name ip-space-logger \
  --runtime nodejs20.x \
  --handler index.handler \
  --zip-file fileb://ip-space-logger.zip \
  --role arn:aws:iam::YOUR_ACCOUNT_ID:role/YOUR_LAMBDA_ROLE
```

### 3. Add a Function URL (simplest — no API Gateway needed)

```bash
aws lambda create-function-url-config \
  --function-name ip-space-logger \
  --auth-type NONE \
  --cors '{"AllowOrigins":["*"],"AllowMethods":["GET","POST"],"AllowHeaders":["Content-Type"]}'
```

Or attach to **API Gateway** (HTTP API) with a `$default` route → `ANY /{proxy+}`.

---

## API Gateway / ALB — Method Mapping

| HTTP Method | Action                                  |
|-------------|------------------------------------------|
| `GET`       | Returns the HTML submission form         |
| `POST`      | Validates Space ID + IP, records entry   |

Lambda receives the standard [API Gateway v1 proxy](https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html) or [Function URL](https://docs.aws.amazon.com/lambda/latest/dg/lambda-urls.html) event shape — both are supported via `event.httpMethod`.

---

## settings.json — Space Configuration

```json
{
  "spaces": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "name": "Production Space Alpha",
      "active": true
    }
  ]
}
```

| Field    | Description                                                  |
|----------|--------------------------------------------------------------|
| `id`     | GUID — submitted by users; validated server-side            |
| `name`   | Human-readable label shown in the form dropdown             |
| `active` | If `false`, submission is rejected with a 403 response      |

---

## Data Store

Records are saved as a JSON array to `/tmp/ip-records.json` (Lambda ephemeral storage).

**For production persistence**, replace `saveRecords` / `loadRecords` in `index.js` with calls to:
- **DynamoDB** — recommended for serverless
- **S3** — simple and durable
- **RDS / Aurora** — for relational queries

### Record shape

```json
{
  "id": "rec_1717000000000_abc123",
  "spaceId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "spaceName": "Production Space Alpha",
  "ipAddress": "203.0.113.42",
  "recordedAt": "2025-05-30T04:12:00.000Z"
}
```

---

## Validation Rules

| Field       | Rule                                                            |
|-------------|-----------------------------------------------------------------|
| `spaceId`   | Must be a valid GUID format + present in `settings.json`        |
| `ipAddress` | Must be valid IPv4 or IPv6                                      |
| Space status| Space `active` flag must be `true`                              |

---

## Environment Variables

| Variable         | Default                   | Description                      |
|------------------|---------------------------|----------------------------------|
| `DATA_STORE_PATH`| `/tmp/ip-records.json`    | Override path for record storage |
