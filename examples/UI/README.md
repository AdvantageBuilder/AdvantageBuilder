## UI Examples
This folder contains example macros demonstrating **user interface features** in AdvantageBuilder.
These examples show how macros can interact with users through messageboxes (alert, prompt, confirm), HTML forms, and WinForms‑based UI tools.
All examples are provided as .txt **macro files**, which can be downloaded and added directly into AdvantageBuilder.

## Using These Macros in AdvantageBuilder
To import any macro from this folder:

1. Download the .txt file
2. Open **AdvantageBuilder**
3. In the left folder tree, right‑click any folder
4. Select **Add Macro**
5. Choose the downloaded .txt file

The macro will appear inside the selected folder and can be opened, edited, or executed immediately.

## Included UI Examples
**1. Launch Web Site**
Demonstrates how a macro can open a web browser and navigate to a specified URL.
Useful for integrating web resources, dashboards, or external tools into workflows.

**2. Passing Parameters to Web Pages**
Shows how macros can launch a web page while passing parameters to web pages in three different ways:

- Query Strings
- GUI Parameters Object Model
- Macro Parameters

This is commonly used for dynamic HTML forms, reporting pages, or custom web tools.

**3. User Interaction – Macro Input Helper**
Demonstrates AdvantageBuilder’s input helper features, allowing macros to collect user input in a structured way.
Useful for workflows that require user‑provided values.

**4. User Interaction – WinForms**
Shows how to build simple WinForms‑based UI tools using AdvantageBuilder.
This example demonstrates form creation, controls, and event handling.

**5. User Interaction 101 – Prompt, Alert, Confirm**
A beginner‑friendly introduction to basic UI interactions:

- alert()
- confirm()
- prompt()

These functions allow macros to communicate with users and request simple input.

**6. User Interaction 202 – showHTMLForm**
Demonstrates how to display custom HTML forms inside AdvantageBuilder using the built‑in HTML rendering engine.
Useful for more advanced UI scenarios requiring custom layouts or styling.

**7. User Interaction 202 – showHTMLFormEdge**
Similar to the previous example, but uses the Edge‑based HTML renderer, enabling modern HTML/CSS/JS support.
Ideal for richer UI experiences.

## About UI Macros in AdvantageBuilder
AdvantageBuilder supports multiple UI interaction methods:

- MessageBoxes (alert, prompt, confirm)
- HTML forms (IE engine)
- HTML forms (Edge engine)
- WinFormsHelper for native Windows UI
- Launching external web pages

UI macros may use:

- **PowerShell**
- **JavaScript V8**
- **Template Language**
- **JScript.NET**

depending on the example.

## Contributing
If you want to add more UI examples:

place your .txt macro file in this folder

include a short description in this README.md or create a new one inside a subfolder

Pull requests are welcome.
