<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#lab_details">Lab Details</a>
      <ul>
        <li><a href="#prompt">Prompt</a></li>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#q1">Question One</a></li>
        <li><a href="#q2">Question Two</a></li>
        <li><a href="#q3">Question Three</a></li>
        <li><a href="#q4">Question Four</a></li>
      </ul>
    </li>
    <li>
      <a href="#results">Results</a>
      <ul>
        <li><a href="#grade">Grade</a></li>
        <li><a href="#comments">Comments</a></li>
      </ul>
    </li>
  </ol>
</details>

# Prompt
## Overall
The purpose of this lab is to familiarize yourself with Node.js modules and further your understanding of JavaScript syntax.
## Specifically

## Problem Resolution Explaination
1. Function maxElement returns the incorrect index because this does not make a copy of array:
    ```let arrayDupe = array;```
   Instead I changed it to:
   ```let arrayDupe = array.slice();```
2. 
