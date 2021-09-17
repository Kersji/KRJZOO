package com.natwest.springzoo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity // Marking class Animals as a Table
public class Animals {

	// Define the primary key 
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;				// Animal Id
	
	// Fields
	private String 	name;			// Animal name
	private String 	species;		// Animal species
	private	char 	sex;			// Animal sex
	private String 	arrivalDate;	// Date arrived
	private	String	dateOfBirth;	// Date of birth
	private int		age;			// Animal age
	private String	birthLocation;	// Animal birth location
	private	String	birthType;		// Animal birth type
	private	String	enclosure;		// Animal enclosure
	private	String	zooKeeper;		// Animal zoo keeper
	
	// Default Constructor
	public Animals() {}

	// Constructor with all fields excluding id
	public Animals(String name, String species, char sex, String arrivalDate, String dateOfBirth, int age,
			String birthLocation, String birthType, String enclosure, String zooKeeper) {
		super();
		this.name = name;
		this.species = species;
		this.sex = sex;
		this.arrivalDate = arrivalDate;
		this.dateOfBirth = dateOfBirth;
		this.age = age;
		this.birthLocation = birthLocation;
		this.birthType = birthType;
		this.enclosure = enclosure;
		this.zooKeeper = zooKeeper;
	}

	// Constructor with all fields
	public Animals(Long id, String name, String species, char sex, String arrivalDate, String dateOfBirth, int age,
			String birthLocation, String birthType, String enclosure, String zooKeeper) {
		super();
		this.id = id;
		this.name = name;
		this.species = species;
		this.sex = sex;
		this.arrivalDate = arrivalDate;
		this.dateOfBirth = dateOfBirth;
		this.age = age;
		this.birthLocation = birthLocation;
		this.birthType = birthType;
		this.enclosure = enclosure;
		this.zooKeeper = zooKeeper;
	}
	
	
	// Getters
	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getSpecies() {
		return species;
	}

	public char getSex() {
		return sex;
	}

	public String getArrivalDate() {
		return arrivalDate;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public int getAge() {
		return age;
	}

	public String getBirthLocation() {
		return birthLocation;
	}

	public String getBirthType() {
		return birthType;
	}

	public String getEnclosure() {
		return enclosure;
	}

	public String getZooKeeper() {
		return zooKeeper;
	}

	// Setters
	public void setId(Long id) {
		this.id = id;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	public void setSpecies(String species) {
		this.species = species;
	}

	public void setSex(char sex) {
		this.sex = sex;
	}

	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public void setBirthLocation(String birthLocation) {
		this.birthLocation = birthLocation;
	}

	public void setBirthType(String birthType) {
		this.birthType = birthType;
	}

	public void setEnclosure(String enclosure) {
		this.enclosure = enclosure;
	}

	public void setZooKeeper(String zooKeeper) {
		this.zooKeeper = zooKeeper;
	}
		
}