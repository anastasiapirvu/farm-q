import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button, Modal } from 'react-bootstrap';
import ProductDisplay from "./ProductDisplay";
import farmerData from "./FarmerData";





function LeafletMap() {

    const [products, setProducts] = useState();


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    function resetTotal() {
        alert("Thank you for supporting us");

    }


    return (

        <>
            <div className="col-sm col-md mb-3">
            <MapContainer center={[50.830, 4.34]} zoom={11} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {farmerData.map(frmr => { 
                    const myHandleShow = () => {
                        if ("products" in frmr) {
                        setProducts(frmr.products);
                        } else {
                        setProducts([]);
                        }
                        handleShow();
                        
                    }
                    return (
                    <Marker
                        key={frmr.id}
                        position={[frmr.latitude, frmr.longitude]}>

                        <Popup className ="Popup" position={[frmr.latitude, frmr.longitude]}>
                            <div>
                                <h4>{frmr.name}</h4>
                                <p>{"Owner:" + " " + frmr.owner}</p>
                                <p>{"Contact:" + " " + frmr.contact}</p>


                                <Button variant="success" onClick={myHandleShow}>
                                    Show products
      </Button>

                            </div>

                        </Popup>

                    </Marker>

                )})};
</MapContainer>
</div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <ProductDisplay products={products} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="success" name="" onClick={resetTotal}>
                        Checkout
          </Button>
                </Modal.Footer>
            </Modal>

        </>

    );
};

export default LeafletMap;