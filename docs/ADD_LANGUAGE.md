
# How to Add Your Own Language

You can easily localize this app in your preferred language **without touching the `src` folder**. Follow these simple steps:

---

### 1. Register Your Language

Go to: `public/languages.json`

You’ll see existing language objects like this:

```json
[
  { "code": "en", "label": "English" },
  { "code": "hi", "label": "हिंदी" },
  { "code": "ar", "label": "العربية" }
]

  ```
  ➡️ Add your language by creating a new object. For example:
  ```
  { "code": "fr", "label": "Français" }
  ```

  ### 2. Create a Translation Folder
Go to: `public/locales`

You will see folders like:
```
en/
hi/
ar/
```
➡️ Create a new folder using your language code (e.g., fr for French, de for German).

  ### 3. Copy the English Translation file
  Open the `en/translation.json`file
 
 Copy it into your newly created language folder (e.g., fr/)



 ### 4. Translate the Content
 Open your new `translation.json`

Replace English text with your translated language strings

### Done!
Now, your language is integrated and can be selected from the language switcher in the app UI.

