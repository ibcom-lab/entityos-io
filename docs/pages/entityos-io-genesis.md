---
layout: default
title: Genesis - entityOS.io
permalink: /genesis
---

# Genesis

Using functions at [Cloud-Build](https://github.io/ibcom-lab/entityos-cloud-build).

## 1. Based on [Model schema](/models) build the tables and initial data for starting an entityOS service/node.

**Genesis Objects:**

- cont_business
- cont_person
- sec_business
- sec_person

2. Get the system table data.

Based on:
- entityos-storage-model-objects-processed-system.json
- entityos-storage-model-objects-processed-system-data.json

Cloud-build process:
- Get the data from entityos-storage-model-objects-processed-system-data.json
- Then can use to generate SQL as per the genesis initialisation code.
By mapping the table to the object


---

### Object Types

|ID|Name|Notes|
|--|----|-----|
|1|Audit|Not 2,3 or 4 -Deprecated|
|2|Core|SEC_|
|3|System|No Space ID|
|4|Space|Has Space ID|

