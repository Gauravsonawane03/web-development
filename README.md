# Web Development Journey

This repository documents my journey of learning modern web development through structured practice, projects, and software-engineering fundamentals.

## Goal

Build strong frontend and backend development skills and eventually develop production-quality web applications.

## Technology Roadmap

### Frontend

- HTML
- CSS
- JavaScript
- TypeScript
- React

### Backend

- Node.js
- Express.js
- REST APIs
- PostgreSQL

### Supporting Skills

- Git & GitHub
- Debugging
- Testing
- Authentication
- Security
- Deployment
- Basic System Design

## Progress

### HTML

- [x] HTML fundamentals
- [x] Semantic HTML
- [x] Links and images
- [x] Lists
- [x] Tables
- [x] Forms
- [x] Accessibility basics
- [x] Useful HTML attributes
- [x] Basic page structure

### CSS

- [x] CSS fundamentals
- [x] Selectors
- [x] Cascade and specificity
- [x] Inheritance
- [x] Box model
- [x] Display
- [x] Flexbox
- [x] CSS Grid
- [x] Responsive design
- [x] CSS Positioning
- [x] Advanced responsive layouts
- [x] CSS architecture
- [x] Relative CSS units

### JavaScript

- [x] Fundamentals
- [x] DOM manipulation
- [x] Events
- [x] Forms
- [x] Input handling
- [x] Basic validation
- [x] DOM state + JavaScript logic
- [x] localStorage
- [x] Async JavaScript
- [ ] APIs
- [ ] Modern JavaScript

### TypeScript

- [ ] Fundamentals
- [ ] Types
- [ ] Interfaces
- [ ] Generics
- [ ] Type-safe application development

### React

- [x] Components
- [ ] Props and state
- [ ] Hooks
- [ ] Routing
- [ ] API integration
- [ ] Application architecture

### Backend

- [ ] Node.js
- [ ] Express.js
- [ ] REST APIs
- [ ] PostgreSQL
- [ ] Authentication
- [ ] Security
- [ ] Testing
- [ ] Deployment

## Daily Learning Log

### 2 October 2026 — React Controlled Forms + Component Communication

- Built a fresh controlled-form variation to test transfer rather than repeating the previous implementation
- Used React state to manage current input, submitted value, and validation error
- Implemented a controlled input using `value` and `onChange`
- Implemented form submission using `onSubmit`
- Used `event.preventDefault()` to prevent the browser's default form submission and page reload
- Implemented empty-input validation using `trim()`
- Displayed validation errors conditionally
- Stored the submitted value separately from the current input value
- Tested empty submission, valid submission, input changes, and resubmission with updated data
- Debugged a JSX error caused by an accidental assignment
- Built an `ItemSelector` child component for component communication practice
- Passed parent-owned `items` data to the child through `props.items`
- Passed the parent's `setSelectedItem` function to the child through an `onSelect` callback prop
- Implemented child interaction using `onClick`
- Used `props.onSelect(item.name)` to send the selected item from the child back to the parent
- Added `selectedItem` state in the parent component
- Displayed the parent's selected state in the UI
- Verified that clicking Laptop, Keyboard, and Monitor updates the parent's state correctly
- Tested repeated selections, different selection orders, and refresh behavior
- Demonstrated the React data flow: parent state → props → child interaction → callback prop → parent state update

Controlled forms were reinforced through a fresh variation and functional testing, but the implementation still required some syntax guidance. Component communication and lifting state were implemented with guidance and successfully tested end-to-end. These concepts are not yet considered independently mastered and should receive further retrieval and fresh variations.

## Projects

Projects will be added progressively as my development skills improve.

The focus is on understanding how software works and building projects independently rather than following tutorials mechanically.

## Engineering Principles

- Understand before memorizing
- Write clean and maintainable code
- Use Git consistently
- Debug systematically
- Test important functionality
- Build incrementally
- Prefer fundamentals over unnecessary complexity