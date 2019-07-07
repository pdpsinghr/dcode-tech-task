import React from 'react'
import { Card, Icon, Label, Button } from 'semantic-ui-react'

const CardView = (props) => (
  <div style={{ paddingTop: 20 }}>
    <Card className="paper">
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra style={{ paddingTop: 30 }}>
        <div>
          {props.tags.map((item) => <Label> {item}</Label>)}
        </div>

      </Card.Content>
    </Card>
  </div>
)

export default CardView
