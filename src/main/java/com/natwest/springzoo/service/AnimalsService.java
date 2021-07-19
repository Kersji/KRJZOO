package com.natwest.springzoo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.natwest.springzoo.domain.Animals;
import com.natwest.springzoo.repo.AnimalsRepo;

@Service
public class AnimalsService {

	// Set dependency
	public AnimalsRepo repo;

	@Autowired
	public AnimalsService(AnimalsRepo repo) {
		this.repo = repo;
	}
	
	// CRUD functionality
	
	// CREATE
	public Animals createAnimals(Animals animal) {
		
		// Return new animal created for display on front-end
		Animals newAnimal = this.repo.saveAndFlush(animal);
		return(newAnimal);
	}
	
	// READ
	public List<Animals> readAllAnimals() {
		return this.repo.findAll();
	}
	
	// UPDATE
	public Animals updateAnimals(Long id, Animals animal) {
		
		Animals saveAnimal;
		
		// Retrieve animal to be updated by id
		Animals updAnimal = this.repo.getById(id);
				
		// Set updated fields
		updAnimal.setAge(animal.getAge());
		updAnimal.setArrivalDate(animal.getArrivalDate());
		updAnimal.setBirthLocation(animal.getBirthLocation());
		updAnimal.setBirthType(animal.getBirthType());
		updAnimal.setDateOfBirth(animal.getDateOfBirth());
		updAnimal.setEnclosure(animal.getEnclosure());
		updAnimal.setName(animal.getName());
		updAnimal.setSex(animal.getSex());
		updAnimal.setSpecies(animal.getSpecies());
		updAnimal.setZooKeeper(animal.getZooKeeper());
		
		//Save changes to the database
		saveAnimal = this.repo.save(updAnimal);
		return saveAnimal;
	}	
	
	// DELETE
	public void deleteAnimals(Long id) {
		this.repo.deleteById(id);
	}
	
	// Search for an animal by id
	public Animals searchAnimals(Long id) {
		
		Optional<Animals> schAnimal = this.repo.findById(id);
		return schAnimal.get();
	}
		
}
