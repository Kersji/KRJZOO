package com.natwest.springzoo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.natwest.springzoo.domain.Animals;
import com.natwest.springzoo.service.AnimalsService;

@RestController
@RequestMapping("/Zoo")
@CrossOrigin
public class AnimalsController {

	// Mapping URLs to Methods
	
	private AnimalsService service;
	
	@Autowired
	public AnimalsController(AnimalsService service) {
		this.service = service;
	} 
	
	// CRUD functionality
	
	// CREATE
	@PostMapping("/createAnimals")
	public ResponseEntity<Animals> createAnimals(@RequestBody Animals animal) {
		return new ResponseEntity<Animals> (this.service.createAnimals(animal), 
				HttpStatus.CREATED);
	}
	
	// READ
	@GetMapping("/readAllAnimals")
	public ResponseEntity<List<Animals>> readAllAnimals() {
		return new ResponseEntity<List<Animals>> (this.service.readAllAnimals(), 
				HttpStatus.OK);
	}
		
	// UPDATE
	@PatchMapping("/updateAnimals/{id}")
	public ResponseEntity<Animals> updateAnimals(@PathVariable Long id,
			@RequestBody Animals animal) {
		
		return new ResponseEntity<Animals> (this.service.updateAnimals(id, animal), 
				HttpStatus.ACCEPTED);
	}
	
	// DELETE
	@DeleteMapping("/deleteAnimals/{id}")
	public ResponseEntity<Animals> deleteAnimals(@PathVariable Long id) {
		this.service.deleteAnimals(id);
		return new ResponseEntity<Animals> (HttpStatus.NO_CONTENT);
	}
	
	// Search for an animal by id
	@GetMapping("/searchAnimals/{id}")
	public ResponseEntity<Animals> searchAnimals(@PathVariable Long id) {
		return new ResponseEntity<Animals> (this.service.searchAnimals(id), 
				HttpStatus.OK);	
	}
			
}
