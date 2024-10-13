#!/bin/bash

# Step 1: Compile the VM core (ML-Plus)
echo "Compiling AstraPrime VM core..."
mlplusc vm-core/astra_prime_vm.mlplus -o astra_prime_vm.o

# Step 2: Convert HTML-C to HTML/CSS/JS
echo "Converting HTML-C to frontend..."
htmlc gui/index.html -o gui/output.html

# Step 3: Compile EAL code
echo "Compiling EAL code..."
eal-compiler eal/eal_instructions.eal -o eal_instructions.o

# Step 4: Compile MDRI translation rules
echo "Compiling MDRI translations..."
mdri-compiler mdri/translation.mdri -o mdri_translation.o

# Step 5: Link all objects together
echo "Linking objects into a single executable..."
gcc -o astra_prime_executable astra_prime_vm.o eal_instructions.o mdri_translation.o

# Step 6: Finalize and optimize
echo "Finalizing and optimizing..."
strip astra_prime_executable
