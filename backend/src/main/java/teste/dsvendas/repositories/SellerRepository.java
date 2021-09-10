package teste.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import teste.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{

}
