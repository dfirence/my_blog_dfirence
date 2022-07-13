import Mermaid from '@theme/Mermaid';

# Search Usage

Searching with the **Mitre Assistant** is fast and easy.  But you need to keep a few things in mind.

<br />

:::note Search Guideline

All searches are completed by using the:

```text
search subcommand

-m or --matrix parameter

-t or --term paramer
```

<br />

**Example: Search for Technique with ID 1480**

<br />

```bash
mitre-assistant search -m enterprise -t "t1480"
```
:::

<br />

## Search Concepts

The **Mitre Assistant** cli uses the `search` subcommand. This subcommand mode is designed as a search engine. Users of ATT&CK who know the terminology of the matrix should just have to provide inputs (search terms), and get relevant answers they are seeking.

The subcommand accepts both `single` and `multiple` inputs with **comma** `,` to indicate their needs for searching are various types of input.  Each input is considered a `context`.  Therefore, when you want to search for a techniques based on its `id` field, you are asking the tool to find techniques with matches on the `technique_id` context. Another example, is when you want to search techniques based on the operating system (platform), then the `platform` is the context recognized by the tool to fetch the techniques applicable for that platform.

Let's look at practical examples of how to search by different contexts.

### Search Context Types

<Mermaid chart={`
	graph LR;
		x(mitre-assistant) --> y(search);
		y --> c(contexts);
    subgraph Search Terms
		p(platform_name) & d(data_source_name) & ta(tactic_name) & te(technique_id) & tn(technique_name) & a(adversary_name) & m(malware_name) & t(tool_name)
    end
    c --> p & d & ta & te & tn & a & m & t 
    p & d & ta & te & tn & a & m & t --> r(results)
    r --> tech(techniques)
`}/>

<br />
<br />

:::note Single Input
  
  <br />

  ```bash
  # Assumes you want all techniques for the windows platform
  #
  mitre-assistant search -m enterprise -t "windows"
  ```

  <br />

  ```bash
  # Assuumes you want all techniques for persistence tactic
  #
  mitre-assistant search -m enterprise -t "persistence"
  ```

  <br />

  ```bash
  # Assumes you want all techniques whose name
  # contains the "Exploitation" keyword
  #
  mitre-assistant search -m enterprise -t "Exploitation"
  ```

  <br />

  ```bash
  # Assumes you want all techniques whose datasource
  # contains "wmi-creation"
  #
  mitre-assistant search -m enterprise -t "wmi-creation"
  ```

  <br />

  ```bash
  # Assumes you want all techniques for the adversary "apt1"
  #
  mitre-assistant search -m enterprise -t "apt1"
  ```


  <br />

  ```bash
  # Assumes you want all techniques for the malware "poisonivy"
  #
  mitre-assistant search -m enterprise -t "poisonivy"
  ```


  <br />

  ```bash
  # Assumes you want all techniques for the tool "mimikatz"
  #
  mitre-assistant search -m enterprise -t "mimikatz"
  ```
:::


<br />

### Search Inputs

So far we have seen how contexts (categories of search) are supported by **Mitre Assistant**, and the above examples only showed `single inputs` at work.  But it is more useful when you can query for multiple inputs within a context. It is important to understand, the tool **only** supports `single context` to `multiple inputs`.

The **graph below**, shows this important distinction.

<Mermaid chart={`
	graph LR;
		x(mitre-assistant) --> y(search);
		y --> c(contexts);
		c --> p(platform_name)
    p --> i(inputs)
    subgraph Inputs
    s(single) & m(multiple)
    end
    i --> s & m
    s --> windows
    m --> aws & linux & macos
`}/>

<br />
<br />

:::note Multiple Inputs
  
  <br />

  ```bash
  # Assumes you want all techniques for various platforms
  #
  mitre-assistant search -m enterprise -t "windows,linux,macos"
  ```

  <br />

  ```bash
  # Assuumes you want all techniques for various tactics
  #
  mitre-assistant search -m enterprise -t "execution,privilege-escalation,persistence"
  ```

  <br />

  ```bash
  # Assumes you want all techniques various datasources
  #
  mitre-assistant search -m enterprise -t "wmi-creation,windows-registry-key-access,web-credential-usage"
  ```

  <br />

  ```bash
  # Assumes you want all techniques for various adversaries
  #
  mitre-assistant search -m enterprise -t "apt1,apt29,apt3,fin7,fin8,fin10"
  ```


  <br />

  ```bash
  # Assumes you want all techniques for various malware
  #
  mitre-assistant search -m enterprise -t "poisonivy,boostwrite,griffon,halfbaked"
  ```


  <br />

  ```bash
  # Assumes you want all techniques for various tools
  #
  mitre-assistant search -m enterprise -t "mimikatz,net,ipconfig"
  ```
:::

<br />

### Search Exports

Both `CSV` and `JSON`  are **first-class citizens** in **Mitre Assistant**.  The export functionality is provided by the `-e` or `--export-to` parameter switch.

Majority of queries, whether they are `single-input` or `multiple-input` are exportable by using the `-e` switch.

<br />

:::note CSV Exports

<br />

Exporting to csv is done by `-e csv`, like this:

```bash
mitre-assistant search -m enterprise -t "windows" -e csv
```

<br />

Exporting to CSV to a file of your choosing is done by adding the `-f` or `--file` switch, like this:

```bash
mitre-assistant search -m enterprise -t "windows" -e csv -f the_windows_techniques.csv
```
:::

<br />

:::note JSON Exports

<br />

Exporting to JSON is done by `-e json`, like this:

```bash
mitre-assistant search -m enterprise -t "windows" -e json
```

<br />

```bash
mitre-assistant search -m enterprise -t "windows" -e json > the_windows_techniques.json
```
:::

<br />
<br />

### Search Subtechniques

By default the **Mitre Assistant** cli provides its search results in a `grid` table.  This table does not render rows for the subtechniques by default, you have to use the `-s` or `--subtechniques` parameter switch in your query. 

The switch is only useful when a technique **has a sub-technique** in scope.  For example like this:

:::note Searching For Subtechnique details

  <br />

  Let's search for Technique ID 1480

  ```bash
  mitre-assistant search -m enterprise -t "t1480"
  ```
  
  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117520035-498d5b80-af74-11eb-9305-048abf0327c1.png)

  <br />

  Notice you have a column **SUB-TECHNIQUES** with a value for **T1480.001**. To see the details for that technique you just add the `-s` switch at the end of your query.

  ```bash
  mitre-assistant search -m enterprise -t "t1480" -s
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117520086-81949e80-af74-11eb-9bfd-bd593c003ae9.png)
:::

<br />

:::tip

<br/>

**Searching For Subtechniques** with the `-s` or `--subtechniques` parameters **is not needed** when you are profiling an Adversary, Malware, or Tool.

Reference the Profiling Section for details
:::


<br />
<br />

## Search Queries  (Built-in)

**Mitre Assistant** is developed to be a batteries included utility for end-users who should only need to focus on asking questions, and finding answers from the ATT&CK dataset.  This focus is why it **is not a library**, which is for users that want/need to develop their own custom tools so other technical users can build tools from such library.

:::note ETL Design
The approach here is different because of the `etl` design.  This design stands for `Extract`, `Transform`, and `Load`. It is a design paradigm aligned to the lifecycle of information as it traverses a platform.  This is also why `CSV` and `JSON` are first-class citizens to support a wide `interchange` of information across machines.
:::

<br />

Let’s now focus on demonstrating the `built-in` queries offered by the tool to immediately enable users that are asking common questions around ATT&CK and its public enterprise dataset.

<br />
<br />

### Stats Overview

All queries that are prefixed with `stats:` are part of awareness use-cases.  Meaning, these queries support the way most professionals approach a dataset as they are exploring it to make sense of what the data may have to offer.  When you are using **Mitre Assistant**, you are encouraged to use these queries as you are discovering ways to operationalize the ATT&CK matrix in your security program and support its defensive requirements.

<br />

:::danger BIAS - PRE-ANALYSIS NOTIONS

  **It is important** to note, the dataset provided by Mitre-Assistant is public information as-is, and as provided by The MITRE Corporation.

  This data should be used for general understanding of how to work with the ATT&CK matrix.

  **The data that should be a source of truth is your own telemetry** from your sensors that are hopefully triggering alerts/events that use the ATT&CK matrix nomenclature.
:::

<br />

### Stats - Adversaries

:::note Stats By Adversaries

  <br />

  ```bash
  mitre-assistant search -m enterprise -t "stats:adversaries"
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117378964-72deb680-aea4-11eb-8a23-13b86d50b4f5.png)
:::

<br />
<br />


### Stats - Malware

:::note Stats By Malware

  <br />

  ```bash
  mitre-assistant search -m enterprise -t "stats:malware"
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117379022-9275df00-aea4-11eb-8f70-19d93b8389cb.png)

:::

<br />
<br />

### Stats - Tools

:::note Stats By Tools

  <br />

  ```bash
  mitre-assistant search -m enterprise -t "stats:tools"
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117379108-bcc79c80-aea4-11eb-9bef-b1f0e013fa08.png)
:::

<br />
<br />


### Stats - Platforms

:::note Stats By Platforms

  <br />

  ```bash
  mitre-assistant search -m enterprise -t "stats:platforms"
  ```

  ![image](https://user-images.githubusercontent.com/11415591/117378546-b127a600-aea3-11eb-8dc2-803d265d0889.png)
:::

<br />
<br />

### Stats - Tactics

:::note Stats By Tactics

  <br />

  ```bash
  mitre-assistant search -m enterprise -t "stats:tactics"
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117459796-c93a0c80-af19-11eb-9e33-a3cb003fe10c.png)
:::

<br />
<br />

### Stats - Data Sources

:::note Stats By Data Sources

  <br />

  ```bash
  mitre-assistant search -m enterprise -t "stats:datasources"
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117378614-cd2b4780-aea3-11eb-9647-aa2c8b102350.png)
:::

<br />
<br />

### Stats - Techniques

:::note Stats By Techniques

  <br />

  ```bash
  mitre-assistant search -m enterprise -t "stats:techniques"
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117378779-17acc400-aea4-11eb-9989-64ca8d529634.png)

:::

<br />
<br />

### Stats - Sub-Techniques

:::note Stats By Sub-Techniques

  <br />

  ```bash
  mitre-assistant search -m enterprise -t "stats:subtechniques"
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117378846-37dc8300-aea4-11eb-9c21-2aa1504ec1e1.png)

:::

<br />
<br />

### Techniques - Deprecated

Deprecated techniques are those techniques that are removed from the ATT&CK matrix completely, or cease to exist.

<br />

:::note Query For Deprecated Techniques
  
  <br />

  ```bash
  mitre-assistant search -m enterprise -t "deprecated"
  ```

  <br />

  ![deprecated](https://user-images.githubusercontent.com/11415591/97817714-11772a00-1c6c-11eb-9813-e0bca86fe7ca.png)
:::

<br />
<br />

### Techniques - Overlap

Overlap techniques are those that are repeated across tactics. For example, technique ID T1574 is applicable in both the `persistence`, and `defense-evasion` tactic.

<br />

:::note Query For Technques With Overlap in TACTICS
  
  <br />

  ```bash
  mitre-assistant search -m enterprise -t "overlap"
  ```
:::


<br />
<br />

### Techniques - Revoked

Revoked techniques are those techniques that **modified** but not deprecated (removed) from the matrix. For example, a technique whose ID previously was `T1234` and is now renamed to `T2468`.

<br />

:::note Query For Revoked Techniques
  
  <br />

  ```bash
  mitre-assistant search -m enterprise -t "revoked"
  ```

  <br />

  ![revoked](https://user-images.githubusercontent.com/11415591/93018273-839c8e00-f59c-11ea-9ee0-2490b870fbf0.png)
:::


<br />
<br />

### Techniques - Without Data Sources 

Techniques which for whatever reason, do not have a data source assigned to it. **The author** of **Mitre Assistant** considers this an anomaly query that is useful to see why there are inconsistencies in the ATT&CK matrix.

<br />

:::note Query For Techniques That DO not have a data source
  
  <br />

  ```bash
  mitre-assistant search -m enterprise -t "nodatasources"
  ```
:::

<br />
<br />

### Techniques - Without Sub-Techniques 

As of V7 of the enterprise ATT&CK matrix, the MITRE Corporation introduced the concept of `sub-techniques`.  This query keeps track of the techniques that do not have any sub-techniques assigned to it.

:::note Query For Techniques That DO not have a data source
  
  <br />

  ```bash
  mitre-assistant search -m enterprise -t "nosub"
  ```
:::

<br />
<br />

### Profiling

Some specific data elements (entities) are organized in what **Mitre Assistant** considers **profiling**.  These entities are the **Adversary**, **Malware**, and **Tool**. The public dataset provided by the MITRE Corporation [oasis-stix](https://oasis-open.github.io/cti-documentation/stix/intro) exposes relationships, or simply, it has labels of how the dataset connects individual objects to understand the context of the data.

Here's an example of how entities are linked together to expose a solid understanding of ATT&CK (contextually).

<br />

<Mermaid chart={`
	graph LR
    a(Adversary) --uses--> w(weapons)
    w --can_be--> m(malware) & t(tools)
    b(behaviors)
    m & t --have--> b
    te(techniques)
    b --represented_as--> te
    te --> T1234 & T2468 & T13579
`}/>

<br />

With the above diagram, we can now understand a profile in **Mitre Assistant** is a search result that understands the relationships in the above diagram, and also knows how to connect those entities for the end-user when they search for an `Adversary`, `Malware`, or `Tool`.

**Let's dig deeper at profiling adversary entities!**


<br />

### Profiling - Adversary Summary

To profile an adversary, you only need to enter the name of the adversary. **Mitre Assistant** knows based on your input that you want a profile for the adversary.  The profile of an adversary gives you a compact understanding of:

* The `Known Aliases` of the adversary
* The `Known Tactics` as a consequence of the `Known Techniques`, and `Sub-Techniques`
* The `Known Malware` used by the adversary
* The `Known Tool` used by the adversary

<br />

:::note Getting a Summary of FIN7 Adversary

```bash
  mitre-assistant search -m enterprise -t "fin7"
```

<br />

![image](https://user-images.githubusercontent.com/11415591/117463025-3ac78a00-af1d-11eb-91bd-53e5550634c4.png)
:::

<br />

### Profiling - Adversary Details

The summary query result from above is very useful to get a high level understanding, you might have noticed the `technique_id` was provided, **but you did not get the names** of the techniques. So it would be **annoying** for you to do that analysis manually.

To avoid this frustration the **Mitre Assistant** cli allows you to get these details by using the `-c` or `--correlate` switch parameter.

**The correlated details** provide you a compact understanding of all of the previous items, plus the following:

* The `Tactic Name` mapped to the `Technique ID`, and the `Technique Name`
* The `Technique Name` mapped to its `Data Sources`
* The `Malware Name`, and `Tool Name` mapped to the adversary and technique


<br />

:::note Getting the Details for the FIN7 Adversary

  <br />

  ```bash
  mitre-assistant search -m enterprise -t "fin7" -c
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117465616-dfe36200-af1f-11eb-87ef-6390d8b014e2.png)
:::

<br />

### Profiling - Adversaries and Tactics

In cases where you want more **fine-grained** control over the adversary details, you can express semantics with an `AND` operator by using the colon `:` delimiter, like this.

<br />

```bash
mitre-assistant search -m enterprise -t "fin7:persistence" -c
```

<br />

The above query expresses the user’s desire to ask the question: `What are the techniques for FIN7 in the persistence Tactic?`

You are not limited to one tactic with queries of adversaries focused on filters by tactics. You just need to use a `:` delimiter for each tactic. For example, to answer the following question, you would apply a query like below.

`What are the techniques for FIN7 in persistence, defense-evasion, exfiltration tactics?`

<br />

```json
mitre-assistant search -m enterprise -t "fin7:persistence:defense-evasion:exfiltration" -c 
```

<br />
<br />

### Profiling - Malware & Tools Summary

The malware and tool profiles have a slightly reversed relationship in **Mitre Assistant**, the below graph denotes the relationship mapping.


<br />

<Mermaid chart={`
	graph LR;
    a(Adversary)
    m(Malware)
    p(Platform)
    t(Tool)
    te(Technique)
    a --uses--> m & t
    m & t--runs_on--> p
    p --has_functionality_for-->te
    m --designed_behavior_for--> te
    t --can_be_used_for--> te
`}/>

<br />

Understanding the relatonships from above, we can leverage **Mitre Assistant** to give us the results for `malware` or `tool` entities by simply querying them by their name.

The malware overview will provide a concrete understanding of:

* The `Known Adversaries` using the malware
* The `Known Tactics` as a consequence of the `Known Techniques`, and `Sub-Techniques`

<br />
<br />

:::note Getting The Griffon Malware Summary

  <br />

  ```bash
  mitre-assistant search -m enterprise -t "griffon"
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117518905-96bafe80-af6f-11eb-911a-023ff7787f3f.png)
:::

<br />
<br />

### Profiling - Malware & Tools Details

Here you can again use the `-c` or `--correlate` switch parameters, like this:

<br />

:::note Getting The Griffon MALWARE DETAILS

<br />

```bash
mitre-assistant search -m enterprise -t "griffon" -c
```

<br />

![image](https://user-images.githubusercontent.com/11415591/117520288-77bf6b00-af75-11eb-9f4d-ca94831ff20e.png)

:::

<br />

### Profiling - Malware/Tools and Tactics

Similar to filtering adversary objects by tactics, you can also filter techniques of malware and tool objects by tactic, like this:

<br />


```bash
mitre-assistant search -m enterprise -t "griffon:lateral-movement" -c
```

<br />


```bash
mitre-assistant search -m enterprise -t "mimikatz:credential-dumping" -c
```

<br />
<br />

## Wildcard Queries

By default **Mitre Assistant** offers wilcard searches in 2 fields of the baseline.  One is in the `technique_name`, and the other is in the `technique_description` fields. For example, if you type a word (search_term) that is not part of any of the items below, you will get a **wildcard** search against the `technique_name` only.

### Wildcard Exclusions

All of the names of these objects do not support wildcard searching because **Mitre Assistant** indexes each of these terms for every object type, and uses these to hold a context aware index in memory.  This is why you are abale to simply search for things in the vocabulary of ATT&CK without having to use weird parameter switches.

* Adversary Object
* Malware Object
* Tool Object
* Platform Object
* Data Source Object

<br />

### Wildcard Usage - Technique Name

Let's use a search term for this example, we will use the term `"exploit"`.  If you use this term alone, **Mitre Assistant** will look immediately in the `technique_name` field and return all of the techniques that match the word `exploit`, like this:

<br />

:::note WILDCARD SEARCH FOR TERM "EXPLOIT" - DEFAULTS TO TECHNIQUE_NAME

  <br />

  **Notice** the term "exploit" matches in the the **TECHNIQUE** column of the grid, which represents the **name** of the technique

  ```bash
  mitre-assistant search -m enterprise -t "exploit"
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117588209-00faad00-b0f0-11eb-9c7b-c67aba605853.png)
:::

<br />

### Wildcard Usage - Technique Description

The technique name field is very useful for when you want to find technique's whose names have a pattern that interests you.  However, there are many scenarios where there are meaningful snippets or details in the description of a technique.  A technique's description is an explicable narrative provided by the MITRE Corporation to allow analysis to understand the `why` and the `what` about a technique's relevance.

To direct your search towards the `technique_description` field, you use the `-d` or `--search-description` paramater switch. Appending this switch to your query will produce techniques where the word **"exploit"** are mentioned.

Let's see it in action

:::note WILDCARD SEARCH FOR TERM "EXPLOIT" - WITH TECHNIQUE_DESCRIPTION FIELD 

  <br />

  **Notice** the `-d` parameter applied and the results have a new column called **SEARCH TOKEN**.

  Also notice how in the **results**, the name of the technique has no relationship to the term "exploit".


  <br />

  ```bash
  mitre-assistant search -m enterprise -t "exploit" -d
  ```

  <br />

  ![image](https://user-images.githubusercontent.com/11415591/117588463-6d29e080-b0f1-11eb-9c92-38bd88f028ce.png)
:::



<br />

## Navigator Support

At this time **Mitre-Assistant** allows an end-user to parse the `Navigator` format into the above tables.  A future support for exporting from **Mitre-Assistant** format into `Navigator` format is being worked on.

To parse a JSON navigator, you use the `-n` or `--navigator` switch parameter, like this:

<br />

```bash
mitre-assistant search -m enterprise -n my_navigator_file.json
```

<br />
<br />

## What's next

This has been a whirlwind tour of the **flexibility** afforded by the *search* subcommand of the **Mitre Assistant** utility.  Armed with this feature pack flexibility, you are enabled to slice and dice the ATT&CK matrix quickly to get meaningful insights of what that matrix has to offer.  Next we will explore **practical workflows** as recommended by the author of this tool when you are operationalizing ATT&CK into your environment.