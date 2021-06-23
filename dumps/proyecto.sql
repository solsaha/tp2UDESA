-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: proyectoIntegrador
-- ------------------------------------------------------
-- Server version	5.7.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coments`
--

DROP TABLE IF EXISTS `coments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coments` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `productId` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `coment_text` varchar(400) DEFAULT NULL,
  `fecha_creacion` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `productId` (`productId`),
  CONSTRAINT `coments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `coments_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coments`
--

LOCK TABLES `coments` WRITE;
/*!40000 ALTER TABLE `coments` DISABLE KEYS */;
INSERT INTO `coments` VALUES (1,1,3,'Hermoso buzoooo','2021-04-15'),(2,1,2,'Hermoso buzo, muy comodo y fresco.','2021-04-10'),(3,1,1,'Buzo de muy buena calidad.','2021-04-11'),(4,1,5,'Ideal para estar en casa!!','2021-04-20'),(5,2,3,'Colores hermoso.','2021-03-10'),(6,2,2,'hermoso todo, amo la tela.','2021-03-05'),(7,2,1,'inigualablee!','2021-03-01'),(8,2,4,'Muy lindo, me gustaria mas variedad de colores','2021-02-11'),(9,3,5,'Se lava perfecto.','2021-03-10'),(10,3,3,'Muy calido, me salvo del frio!','2021-03-10'),(11,3,2,'Buena calidad y muy buen precio $','2021-04-01'),(12,3,3,'Me encanto el largo que tiene.','2021-03-16'),(13,4,3,'Se lo relage a una amiga y quedo encantadaa','2021-02-11'),(14,4,5,'Me encanto el largo que tiene.','2021-03-16'),(15,4,1,'Hay en otros largos? Esta muy lindo.','2021-01-15'),(16,4,2,'La variedad de talles es buenisimaa, muy linda coleccion.','2021-04-02'),(17,5,3,'Hola! Cuanto stock tienen? La verdad me gusto muchoo.','2021-03-01'),(18,5,2,'Que lindo el estilo.','2021-04-04'),(19,5,1,'Mi hermana quiere uno pero en rosa, se puede?.','2021-02-10'),(20,5,5,'Ideal para una salida de otoñoo.','2021-01-11'),(21,6,5,'Divino el modelo.','2021-01-12'),(22,6,3,'Amo que se puede combinar con todo.','2021-02-13'),(23,6,2,'Muy buena la onda y el estilo.','2021-02-14'),(24,6,1,'Impresionante la calidad, hay mas como este?.','2021-03-15'),(25,7,3,'Quiero ver todo lo nuevo!Amo la marca.','2021-03-16'),(26,7,4,'Lindo como siempre saful.','2021-02-17'),(27,7,2,'Ya quiero q renueven stock.','2021-04-16'),(28,7,1,'Hay mas colores?Me parece super moderno.','2021-01-18'),(29,8,1,'Re calentito y sueve.','2021-03-19'),(30,8,2,'Me recomendo una amigo la pagina y la verdad que este es mi favoritoo.','2021-04-20'),(31,8,4,'Directamente lo agrego a productos, me encanta.','2021-01-29'),(32,8,5,'Lindo corte y buen calze.','2021-02-25'),(33,9,5,'Ideal para estas en casa con el aire.','2021-02-28'),(34,9,4,'Ideal para los primeros dias de otoño.','2021-03-30'),(35,9,3,'Me gustaria ver mas como este.','2021-02-27'),(36,9,2,'Tienen mas largos?.','2021-01-26'),(37,10,2,'Amo, me encantaria verlo en verde.','2021-03-28'),(38,10,1,'Este en rojo seria un fuegoo.','2021-01-21'),(39,10,4,'La verdad muy comodo y lindo, voy a encargar mas.','2021-02-20'),(40,10,5,'Tiene buenas recomendaciones, y lo recomiendo.','2021-04-18');
/*!40000 ALTER TABLE `coments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image` varchar(300) NOT NULL,
  `nombre_producto` varchar(255) NOT NULL,
  `fecha_creacion` date NOT NULL,
  `comentario` varchar(400) DEFAULT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'BuzoKauri.jpeg','Buzo Kauri','2021-02-14','Buzo corto comodo para todas las estaciones , adorado por nuestros clientes.',1,'2021-06-19 15:37:37','0000-00-00 00:00:00'),(2,'BuzoGema.jpeg','Buzo Gema','2021-02-14','Buzo sin capucha, perfecto para usar con todo.',2,'2021-06-19 15:37:37','0000-00-00 00:00:00'),(3,'BuzoJade.jpeg','Buzo Jade','2020-12-25','Buzo oversize con estampa en la espalda \"Everyone knows my path better than I do\".',1,'2021-06-19 15:37:37','0000-00-00 00:00:00'),(4,'BuzoAgata.jpeg','Buzo Agata','2021-03-16','Buzo sin capucha comodo y fresco, perfecto para estar en casa.',3,'2021-06-19 15:37:37','0000-00-00 00:00:00'),(5,'BuzoAmbar.jpeg','Buzo Ambar','2020-11-20','Buzo claro con frase en la manga.',4,'2021-06-19 15:37:37','0000-00-00 00:00:00'),(6,'BuzoArte.jpeg','Buzo Arte','2020-12-25','Buzo que hace referencia a su nombre, original y el mas elegido.',5,'2021-06-19 15:37:37','0000-00-00 00:00:00'),(7,'BuzoBonnie.jpeg','Buzo Bonnie','2021-02-14','Buzo liso oscuro con capucha.',5,'2021-06-19 15:37:37','0000-00-00 00:00:00'),(8,'BuzoDiana.jpeg','Buzo Diana','2020-12-25','Buzo liso corto blanco, totalmente combinable.',3,'2021-06-19 15:37:37','0000-00-00 00:00:00'),(9,'BuzoJackie.jpeg','Buzo Jackie','2021-03-16','Buzo unico verde \"Rusty\".',2,'2021-06-19 15:37:37','0000-00-00 00:00:00'),(10,'BuzoStar.jpeg','Buzo Star','2020-11-20','La \"estrella\" de todos nuestros buzos.',1,'2021-06-22 20:18:17','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(200) NOT NULL,
  `fechaDeNacimiento` date NOT NULL,
  `edad` varchar(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Sol','12345','ssaha@udesa.edu.ar','2001-08-06','19'),(2,'Magali','67890','mparra@udesa.edu.ar','2001-12-18','19'),(3,'Mica','889900','smica@udesa.edu.ar','2001-09-14','19'),(4,'Juan','111','juan@udesa.edu.ar','1999-05-28','22'),(5,'Pablo','90721','pablo@udesa.edu.ar','1999-02-25','22'),(6,'lore','$2a$10$hHFxb/w9d3VjWrIXA32g5eAYwTwP2RD0d6.UYizUE.S02LaLljHjS','mlo@gmail.com','2001-11-11','19'),(7,'usario01','$2a$10$NhduGWOlMjdwJ8VTbImDtegMDV0bGfWtXAq1wR1YTYbauOgAvbFD.','user02@udesa.edu','2001-02-21','20'),(8,'usario01','$2a$10$slYc/6eNr1LJNJA5CuSRte6URSsu3/BdDf1WpHtq0F3nap/8IajOO','user@udesa.edu','2000-02-21','21');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-22 20:33:18
