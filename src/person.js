import Card from 'react-bootstrap/Card';


export default function Person ({fullName,bio, imgSrc, profession})  {

   

    return (
        <Card style={{ width: '18rem'}} className='card'>
          <Card.Body>
            <Card.Title><img src={imgSrc} width={160}/></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{fullName}</Card.Subtitle>
            <Card.Text>
              {bio}
              <br/>
              {profession}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
    
    
