# JOR Bayesian Fusion Web Application

A web-based implementation of the **James Orion Report (JOR) Bayesian Fusion Framework** for analyzing historical UAP (Unidentified Aerial Phenomena) cases using **Solid Object Probability (SOP)** and **Non-Human Probability (NHP)** metrics.

---

## 🚀 Live Demo

Try the web application here:  
[https://jamesorion6869.github.io/jor-fusion-web](https://jamesorion6869.github.io/jor-fusion-web)

---

## 📂 Repository Contents

- `index.html` – Main web interface
- `README.md` – This file  

---

## 🧠 Framework Overview

The **JOR Bayesian Fusion Framework** combines historical UAP data with probabilistic modeling:

- **SOP (Solid Object Probability):** Likelihood that an observed phenomenon corresponds to a physical object.  
- **NHP (Non-Human Probability):** Likelihood that a phenomenon is of non-human origin, constrained by SOP evidence.  

> In this web app, NHP is calculated relative to SOP for each case, following the logic established in **JOR Framework v2.0**.

---

## ⚙️ Features

- Interactive case scoring using SOP/NHP metrics  
- Bayesian posterior probability calculation  
- Visualization of case results with charts  
- Supports bulk import of historical case datasets  
- Lightweight, client-side web application (no backend required)  

---

## 📖 References

- **JOR Report Methodology:** [https://doi.org/10.5281/zenodo.18157347](https://doi.org/10.5281/zenodo.18157347)  
- **Python Implementation (PyMC):** [https://github.com/jamesorion6869/JOR_Framework_PyMC](https://github.com/jamesorion6869/JOR_Framework_PyMC)  
- **Live Web App:** [https://jamesorion6869.github.io/jor-fusion-web](https://jamesorion6869.github.io/jor-fusion-web)  

---

## 🛠️ Installation

No installation required. The app is fully **client-side**. Simply open `index.html` in any modern browser.

If you want to run locally with GitHub Pages:

```bash
git clone https://github.com/jamesorion6869/jor-fusion-web.git
cd jor-fusion-web
open index.html
