# INSTRUCTIONS.MD

Este arquivo contém instruções para tarefas a serem executadas. Quando todas as tarefas forem concluídas e validadas, o conteúdo será limpo, mantendo apenas esta estrutura.

Of course. I've analyzed both repositories. They are well-structured and provide the perfect foundation for this task.

As planners, our goal is to create a clear, step-by-step plan for the Executor to prepare these repositories for public release, ensuring security and proper licensing.

Here is the Task Delegation Plan.

Task Delegation Plan: Prepare Repositories for Public Release
### Task 1: [Backend] Secure the financas-api Repository

Objective: Sanitize the financas-api repository to remove all sensitive information and prepare it for public visibility.

Action: Perform a security audit and cleanup of the financas-api codebase.

Sub-tasks:

Verify .gitignore: Ensure the .env file is listed in financas-api/.gitignore to prevent secrets from being committed.

Create .env.example: Create a new file named financas-api/.env.example. This file will serve as a template for other developers and should contain the required environment variable keys without their secret values.

code
Code
download
content_copy
expand_less

# .env.example
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
JWT_SECRET="YOUR_STRONG_SECRET_HERE"
PORT=3000

Audit for Hardcoded Secrets: Search the entire codebase for any hardcoded sensitive strings (e.g., passwords, API keys, the full DATABASE_URL). Replace any findings with references to process.env.

Review README.md: Check the README.md file for any sensitive information (like test user credentials) and remove it.

### Task 2: [Frontend] Secure the financas-app Repository

Objective: Sanitize the financas-app repository to remove all sensitive information.

Action: Perform a security audit and cleanup of the financas-app codebase.

Sub-tasks:

Verify .gitignore: Ensure the .env and .env.production files are listed in financas-app/.gitignore.

Create .env.example: Create a new file named financas-app/.env.example that includes the necessary keys without values.

code
Code
download
content_copy
expand_less
IGNORE_WHEN_COPYING_START
IGNORE_WHEN_COPYING_END
# .env.example
API_BASE_URL="http://YOUR_LOCAL_IP:3000"

Audit for Hardcoded Secrets: Search the codebase, especially src/api/axiosConfig.ts, for any hardcoded API URLs and replace them with references to the environment variable.

### Task 3: Add MIT License to Both Repositories

Objective: Protect your work and define usage terms by adding an open-source license.

Action: Create a LICENSE file in the root of both the financas-api and financas-app repositories.

Sub-tasks:

In each repository on GitHub, navigate to "Add file" > "Create new file".

Name the file LICENSE.

Use GitHub's "Choose a license template" feature and select the MIT License.

Confirm the year and your full name ("Ícaro Aguiar") in the copyright field.

Commit the new LICENSE file directly to the main branch of each repository.

### Task 4: Make Repositories Public and Update Portfolio

Objective: Change the visibility of the repositories and update your portfolio with the correct links.

Action: Modify repository settings on GitHub and update the portfolio codebase.

Sub-tasks:

Change Visibility: For each repository (financas-api and financas-app), navigate to "Settings", scroll to the "Danger Zone", and change the visibility from "Private" to "Public".

Update Portfolio Data:

Open the src/data/projects.js file (or src/components/Projetos.js if not yet refactored) in your portfolio project.

Locate the project object for "Ascend".

Update the repoLink property to point to the main frontend repository URL: 'https://github.com/IcaroAguiar/financas-app'.

(Optional but recommended): In the Ascend case study description, add a link to the backend repository as well.

This plan ensures a secure and professional transition from private development to a public portfolio piece.

We can now authorize the Executor to begin with Task 1: [Backend] Secure the financas-api Repository.