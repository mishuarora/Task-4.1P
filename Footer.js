// src/Footer.js
import React from 'react';
import { Container, Grid, Header, List, Segment, Input, Button, Divider } from 'semantic-ui-react';

function Footer() {
  return (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Explore' />
              <List link inverted>
                <List.Item as='a'>Home</List.Item>
                <List.Item as='a'>Questions</List.Item>
                <List.Item as='a'>Articles</List.Item>
                <List.Item as='a'>Tutorials</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Support' />
              <List link inverted>
                <List.Item as='a'>FAQs</List.Item>
                <List.Item as='a'>Help</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>Stay connected</Header>
              <Button circular color='facebook' icon='facebook' />
              <Button circular color='twitter' icon='twitter' />
              <Button circular color='instagram' icon='instagram' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider inverted section />
        <div>
          <Input action={{ color: 'grey', labelPosition: 'right', icon: 'mail', content: 'Subscribe' }} placeholder='Enter your email' />
        </div>
        <Grid divided inverted stackable style={{ marginTop: '20px' }}>
          <Grid.Column textAlign='center'>
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='#'>Privacy Policy</List.Item>
              <List.Item as='a' href='#'>Terms</List.Item>
              <List.Item as='a' href='#'>Code of Conduct</List.Item>
            </List>
            <p>DEV@Deakin 2022</p>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;
