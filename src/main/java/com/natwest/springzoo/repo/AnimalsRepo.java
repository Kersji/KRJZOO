package com.natwest.springzoo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.natwest.springzoo.domain.Animals;

@Repository
public interface AnimalsRepo extends JpaRepository<Animals, Long> {

}
