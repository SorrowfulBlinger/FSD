#!/bin/bash

cd my-turborepo

# Build the Next site including SSG
npm run build

# Start the production server
npm run dev