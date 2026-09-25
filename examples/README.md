## Examples
This folder contains example **AdvantageBuilder macros** demonstrating core features of the platform, including:

- AI workflow integrations
- multi‑engine scripting (PowerShell + JavaScript V8 + JScript.NET + Template Language)
- user interaction helpers
- UI tools
- workflows
- web automation
- macro‑to‑macro calling
- ObjectStore usage
- .NET interop

Each example is provided as a .txt **macro file**, which is the native format used by AdvantageBuilder.

## Using These Examples in AdvantageBuilder
All macros in this folder can be **downloaded and added directly** into your AdvantageBuilder environment.

To import a macro:

1. Open **AdvantageBuilder**
2. In the left folder tree, **right‑click** any folder
3. Choose **Add Macro**
4. Select the .txt file you downloaded from this repository
5. The macro will appear inside the selected folder and can be opened, edited, or executed immediately

This makes it easy to explore, modify, and learn from the examples provided here.

## Folder Structure
Examples are organized primarily by **feature**, and secondarily by scripting engine**. AdvantageBuilder macros support combining multiple scripting engines in a single file.

Typical folders include:

- multi-engine/ — macros demonstrating interactions of PowerShell, JavaScript V8, and Template Language; demonstrating objectstore (storing and sharing data between engines) within the same macro
- powershell/ — macros written primarily in PowerShell
- javascript/ — macros written primarily in JavaScript V8
- UI/ — WinFormsHelper UI tools, alerts, prompts, confirmations, input helpers
- workflows/ — multi-step automation examples, calling macros from other macros or from web pages
- dotnet/ — instantiating .NET classes and loading assemblies

Each folder contains:

- one or more .txt macro files
- a README.md explaining the purpose of the examples in that folder

## About AdvantageBuilder Macro Files
AdvantageBuilder macros use the .txt extension and may contain:

- **Template Language**
- **PowerShell**
- **JavaScript V8**
- **JScript.NET**

These engines can coexist inside a single macro file, allowing powerful multi‑engine workflows.

## Contributing
If you want to contribute examples:

- create a new folder under /examples
- add your .txt macro file
- include a README.md describing what the macro demonstrates

Pull requests are welcome.
