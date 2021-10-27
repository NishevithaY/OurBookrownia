import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./footer.css";
import "../index.css"

const Footer = () => {
  return (
    <footer>
      <Container>

      </Container>
      <footer class="footer" id="backimg">
      	 <div class="container">
      	 	<div class="row">
      	 		<div class="footer-col">
      	 			<h4>Sites</h4>
      	 			<ul>
      	 				<li><a href="../AboutUs">About us</a></li>
      	 				<li><a href="../login">Sign in</a></li>
      	 				<li><a href="#">privacy policy</a></li>
      	 			</ul>
      	 		</div>
      	 		<div class="footer-col">
      	 			<h4>Available Services</h4>
      	 			<ul>
      	 				<li><a href="#">Donating & Selling </a></li>
      	 				<li><a href="#">HomeDelivery</a></li>
      	 				<li><a href="#">Place your Order</a></li>
      	 				<li><a href="#">Cash on delivery</a></li>
      	 			</ul>
      	 		</div>
      	 		<div class="footer-col">
      	 			<h4>Online Bookstore</h4>
      	 			<ul>
      	 				<li><a href="#">Used books</a></li>
      	 				<li><a href="#">New books</a></li>
      	 				<li><a href="#">Old books</a></li>
      	 				<li><a href="#">Magazines</a></li>
      	 			</ul>
      	 		</div>
      	 		<div class="footer-col">
      	 			<h4>follow us</h4>
      	 			<div class="social-links">
      	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
      	 				<a href="https://instagram.com/bookrownia?utm_medium=copy_link"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a>
      	 			</div>
      	 		</div>
      	 	</div>
      	 </div>
         <Row>
           <Col className='text-center py-3 colour' >Copyright &copy; Bookrownia</Col>
         </Row>
      </footer>
    </footer>
  )
}

export default Footer
