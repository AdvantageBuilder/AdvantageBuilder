## Multi‑Engine Macros
This folder contains examples demonstrating **AdvantageBuilder’s multi‑engine macro capability** — the ability to combine multiple scripting engines inside a single .txt macro file.
This is one of AdvantageBuilder’s most powerful features, allowing PowerShell, JavaScript (V8), JScript, and Template Language to work together in a single deterministic workflow.

These examples show how different engines can share data, produce output, and coordinate execution inside one macro.

## Included Examples
1. **Hello World (Multi‑Engine)**
A simple introductory macro demonstrating how:

- **PowerShell**
- **JavaScript V8**
- **JScript**
- **Template Language**

can coexist in one file.
Each engine prints its own “Hello World” message, showing how AdvantageBuilder executes mixed‑engine blocks in sequence.

2. **Use ObjectStore To Pass Variables Between Scripting Engines**

This macro demonstrates cross‑engine communication using the **ObjectStore**.

It shows:

- PowerShell storing a value using _addToObjectStore_
- JavaScript V8 retrieving the value with _getFromObjectStore_
- JScript retrieving the same value
- Template Language reading the variable with [!VAR]

This example highlights how AdvantageBuilder enables engines to share state and cooperate inside a single macro.

## How to Use These Macros in AdvantageBuilder
All macros in this folder are provided as .txt **files**, which is the native format used by AdvantageBuilder.

You can download any macro and import it directly:

1. Open **AdvantageBuilder**
2. In the left folder tree, **right‑click** any folder
3. Select **Add Macro**
4. Choose the .txt file you downloaded
5. The macro will appear inside the selected folder and can be opened, edited, or executed immediately

This makes it easy to explore, learn from, and modify the examples.

## About Multi‑Engine Macros
AdvantageBuilder supports multiple scripting engines inside a single macro:

- **PowerShellScript**
- **JavaScriptV8**
- **JScript**
- **Template Language**

Each engine is enclosed in its own block:

[!POWERSHELLSCRIPT]
    ...
[!/POWERSHELLSCRIPT]

[!JAVASCRIPTV8]
    ...
[!/JAVASCRIPTV8]

[!JSCRIPT]
    ...
[!/JSCRIPT]

Template Language commands can appear anywhere in the macro and are processed as part of the overall execution pipeline.

Multi‑engine macros allow you to:

- combine strengths of different languages
- share data through ObjectStore
- build complex workflows
- integrate UI, automation, and logic in one file

## Contributing
If you want to add more multi‑engine examples:

- create a new .txt macro
- place it in this folder
- add a short description to this README.md or create a new one inside a subfolder

Pull requests are welcome.
