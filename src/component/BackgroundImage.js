import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

export default function BackgroundImage() {
  return (
    <div>
    <div>
        {/* <img src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Nutrition/Article/Best+Grocery+Delivery+Services/Instacart.jpg" alt="background" /> */}
        </div>
            
            <Card style={{ width: "80%", minHeight: "428px" }} className="bg-dark text-black"> 
            <img style={{ height:"50%",  width: "100%",  position: "absolute",  top:"0px", left:"0px",  zIndex:"-1" }} src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Nutrition/Article/Best+Grocery+Delivery+Services/Instacart.jpg" alt="background" />
                <Card.ImgOverlay style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px"}}>
                    <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                        Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                    <Card.Text style={{ fontSize: "1em" }}>
                        Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control size="lg" type="text" placeholder="   Enter your address                                                          ->" />
                        </Form.Group>
                    </Form>
                </Card.ImgOverlay> 
            </Card> 
        </div>
  );
}

