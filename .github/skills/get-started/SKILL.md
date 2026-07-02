---
name: get-started
description: 'Guide the user in explaining their project idea, creating a README, and building a flat task list. Use when a user has a project idea but needs help articulating it and breaking it into actionable steps. Keywords: get started, new project, task list, project idea, what should I build, break down project, feature list, build plan, getting started, README, setup project.'
argument-hint: '[brief project idea]'
---

# Get Started

## When to Use

- The user has a vague project idea and needs help clarifying it
- The user wants to turn an idea into a concrete list of buildable tasks
- The user says "I want to build X but don't know where to start"
- The user wants to initialize a new project with a README and task list

## What This Produces

1. A **README.md** that explains what the project is, how to run it, and what tech it uses
2. A **TASKS.md** with an ordered list of features/tasks to build one at a time

The emphasis is on **learning and growth**, not just shipping features.

## Procedure

### 1. Understand the Project

Ask the user to describe their project idea. If they give a one-liner, ask follow-up questions to fill in the blanks:

- **What does it do?** — Who uses it and what problem does it solve?
- **Core interaction** — What's the main thing a user does with it? (e.g., "type a message and get a reply", "upload a photo and see it filtered")
- **Inputs & outputs** — What goes in? What comes out?
- **Tech stack** — What language or tools do they want to use? Is there a specific framework they're learning?
- **Scope** — Is this a weekend project, a multi-week project, or something bigger?

Keep this conversational. Don't ask all questions at once — let the conversation flow naturally.

### 2. Summarize Back

Once you have a solid picture, write a 2-3 sentence summary of the project and ask the user to confirm. This is their chance to correct misunderstandings.

### 3. Create the README

Once the user confirms the summary, create a `README.md` file with these sections:

```
# [Project Name]

[One-line description — what it does and who it's for]

## What It Does

[2-4 sentences explaining the project in plain language. Describe the core interaction from the user's perspective.]

## How to Run

[FILL IN LATER — leave as a placeholder. The developer will fill this in as they build.]

## Tech Stack

[Languages, frameworks, libraries the project will use. Keep it brief — just names.]

## What I'll Learn

[3-5 concepts or skills this project will teach. Frame these as learning goals, e.g., "how to read user input", "how to save data to a file", "how to structure a program with functions"]
```

Create the file, then let the user review and suggest changes before moving on.

### 4. Write the Task List

Break the project into **6-12 concrete, ordered tasks**. Each task should:

- Be something the developer can complete in one sitting
- Build on previous tasks (ordered from foundation → polish)
- Have a clear "done" condition
- Include a brief hint about what technique or concept they'll practice

Save this directly to `TASKS.md` with this format:

```
# Task List for [Project Name]

1. **Set up the project skeleton** — Create the main file and basic structure. Learn: project organization.
2. **Build the core [feature]** — Implement the central interaction. Learn: [key concept].
3. ...
```

## Principles

- **Don't build it for them.** The task list guides them to build it themselves.
- **Favor understanding over speed.** If a task introduces a new concept, name it so they know what they're learning.
- **Keep tasks small.** A task that takes 15 minutes is better than one that takes 4 hours.
- **Order matters.** Foundational things (project setup, data models) come before polish (styling, animations).