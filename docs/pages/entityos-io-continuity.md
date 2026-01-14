---
layout: default
title: Continuity - entityOS.io
permalink: /continuity/
---

## Continuity

### Modes:

1. Export/Manual - provide the object, fields, filters etc
2. Based on the entityOS interface object model to get method and fields (parameters)
	- 2a. All objects or by object name
	- 2b. Based on the entityOS tracking data, based on recorded lastbackupdate or manual sessionid.

### Export Formats:

1. Space Template (template: true)
2. Object Data

### Methods:

|Name|Notes|
|:--:|:---:|
|continuity-get-last-backup-date||
|continuity-set-last-backup-date||
|continuity-reset-last-backup-date||
|continuity-get-tracking-data||
|continuity-backup-data|This is the code you use to get tracking data (what has change) and back it up to local or s3.|
|continuity-util-model-get||
|continuity-backup-object-data|This is the code you use to get data and save to your local code|

### Resources:

- [Continuity](https://github.com/ibcom-lab/entityos-learn-continuity)

