import Adversary from '@theme/Adversary';


# Getting Started



<br />
<br />

## Install

To work with **Mitre-Assistant** you have 3 options.  You can use pre-compiled binaries for your environment, or you can install it from **crates.io** if you are a cargo user, or you can compile the source code on your own.  It is recommended that you use the pre-compiled binaries.

### Pre-compiled Binaries

Follow these steps:

**Step 1 -** &nbsp;&nbsp;Go to the Github Releases Section: &nbsp;&nbsp;&nbsp; **[here](https://github.com/dfirence/mitre-assistant/releases)**

**Step 2 -** &nbsp;&nbsp;Download the `.zip` file for your operating system

**Step 3 -** &nbsp;&nbsp;Unzip the downloaded archive and place it somewhere of your choosing

**Step 4 -** &nbsp;&nbsp;Add to your `PATH` env variable the location in **step 3** so you can call the binary from the CLI from any path

**Step 5 -** &nbsp;&nbsp;Go to the `testing section` below to validate functionality

<br />

### Building From Source

Follow these steps:

**Step 1 -** &nbsp;&nbsp;Clone the repo

```bash
$> git clone https://github.com/dfirence/mitre-assistant.git
```

<br />

**Step 2 -** &nbsp;&nbsp;Navigate into the cloned repo

```bash
$> cd mitre-assistant
```

<br />

**Step 3 -** &nbsp;&nbsp;Compile the repo

```bash
$> cargo build --release
```

<br />

**Step 4 -** &nbsp;&nbsp;Copy your compiled binary into the `.cargo/bin` folder


```bash
$> cp -v ./target/release/mitre-assistant ~/.cargo/bin
```

<br />

**Step 5 -** &nbsp;&nbsp;Go to the `testing section` below to validate functionality

<br />
<br />

### Testing 

Once you have acquired the binary, you want to test it before working with **Mitre-Assistant**.

:::note

```bash
$> mitre-assistant -h
```

You should be able to see the help menu like this below

```text
mitre-assistant v.0.0.18
carlos diaz | @dfirence

Mitre Attack Assistant

	A more useful utility for the ATT&CK Matrix

USAGE:
    mitre-assistant [SUBCOMMAND]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    baseline    Parse a Matrix into comprehensive insights
    download    Download a Matrix From The Mitre CTI Repo
    help        Prints this message or the help of the given subcommand(s)
    search      Search The Baseline

```
:::

<br />
<br />

## Setup

Now that you have installed **Mitre-Assistant**, let's set it up so we can work with it. 


**Step 1 -** &nbsp;&nbsp;Download the ATT&CK Enterprise Matrix

```bash
$> mitre-assistant download -m enterprise
```

**Output**

```text
===========================================================================================

Downlading Matrix : enterprise
Downloading From  : https://raw.githubusercontent.com/mitre/cti/master/enterprise-attack/enterprise-attack.json

===========================================================================================

	[ INFO ] New File Created: /home/alice/.mitre-assistant/matrixes/enterprise.json  
```

<br />
<br />

:::warning
At this time **there's NO Proxy support** for Mitre-Assistant.

Users that have proxy enforcement, will need to setup manually. This is covered in the `manual setup` section
:::

<br />
<br />

**Step 2 -** &nbsp;&nbsp;Parse the downloaded matrix into a `Mitre-Assistant Baseline`

```bash
$> mitre-assistant baseline -m enterprise
```

**Output**

```bash
Matrix Type For Baseline: enterprise

[+] Loading Subtechnique Scanner

	[ INFO ] New File Created: /home/alice/.mitre-assistant/baselines/baseline-enterprise.json

```

<br />
<br />

**Step 3 -** &nbsp;&nbsp; Validate your setup with a `Query`

```bash
$> mitre-assistant search -m enterprise -t "t1480"
```

**Output**

```text
+-------+--------+-----------+-----------------+-------+----------------------+---------------+-------------------+
| INDEX | STATUS | PLATFORMS | TACTIC          | TID   | TECHNIQUE            | SUBTECHNIQUES | DATA SOURCES      |
+-------+--------+-----------+-----------------+-------+----------------------+---------------+-------------------+
| 1     | Active | linux     | defense-evasion | T1480 | Execution Guardrails |   T1480.001   | command-execution |
|       |        | macos     |                 |       |                      |               | process-creation  |
|       |        | windows   |                 |       |                      |               |                   |
+-------+--------+-----------+-----------------+-------+----------------------+---------------+-------------------+
```

<br />
<br />

## Manual Setup

If you are behind a `proxy` where the `download` command encounters an issue in fetching the enterprise matrix, then follow these steps.

<br />

**Step 1 -** Download the latest Matrix From:  [here](https://raw.githubusercontent.com/mitre/cti/master/enterprise-attack/enterprise-attack.json)


**Step 2 -** Rename the downloaded file as:  `enterprise.json`

**Step 3 -** Create this folder structure in your system under your username profile as `.mitre-assistant`

```bash
# Linux
#
mkdir ~/.mitre-assistant
mkdir ~/.mitre-assistant/baselines
mkdir ~/.mitre-assistant/matrixes
```

<br />

```bash
# Windows
#
mkdir C:\Users\alice\.mitre-assistant
mkdir C:\Users\alice\.mitre-assistant\baselines
mkdir C:\Users\alice\.mitre-assistant\matrixes
```

<br />

**Step 4 -** Copy/Move the previously downloaded `enterprise.json` from **step 1** into the `matrixes` folder from **step 3*

**Step 5 -** Run the `mitre-assistant` subcommand called `baseline` like below:

```bash
mitre-assistant baseline -m enterprise
```

**Validate You now Have**

```bash
/home/alice/.mitre-assistant/
├── baselines
│   ├── baseline-enterprise.json
|
└── matrixes
    ├── enterprise.json
 ```