---
layout: default
title: Models - entityOS.io
permalink: /models/
---

# Models

- Interface - supporting organisations etc via apps 
- Storage
	- Persisting the data/information.
	- Used by entityos-continuity - /model folder

[Repo](https://github.com/ibcom-lab/entityos-model)

## Interface Model Schema

- [learn.entityos.cloud/schema](https://learn.entityos.cloud/schema)

### Object Types

|ID|Name|Notes|
|--|----|-----|
|1|Audit|Not 2,3 or 4 Deprecated|
|2|Core|SEC_|
|3|System|No Space ID|
|4|Space|Has Space ID|


## Methods

- **Interface (Factory)**
	- model-core-object-categories
	- model-core-objects
	- model-core-endpoints
	- model-core-endpoint-methods
	- model-core-endpoint-method-parameters (WIP)

- **Storage (Factory)**
	- model-storage-objects - raw data structures
	- model-storage-object-columns
