import React, { useState } from 'react'
import { Button, TextField } from "@material-ui/core";
import { Container, Typography } from '@material-ui/core';
// import {useQuery} from 'react-apollo';

interface ReactFormProps { }

const ReactForm: StorefrontFunctionComponent<ReactFormProps> = ({ }) => {
    const [nome, setNome] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    return (
        <Container style={{backgroundColor: 'white', borderRadius: '10px', marginTop: '40px', padding: '50px'}} component="article" maxWidth="sm">
        <Typography variant="h4" component="h2" align="center">
          Formulário de cadastro
        </Typography>
            
            <form onSubmit={(event) => {
                event.preventDefault();
            }}>
                <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"
                    onChange={(event: React.ChangeEvent<{ value: string }>) => { setNome(event.target.value) }} value={nome} />
                <TextField id="number" label="Telefone" variant="outlined" fullWidth margin="normal"
                    onChange={(event: React.ChangeEvent<{ value: string }>) => { setNumber(event.target.value) }} value={number} />
                <TextField id="email" label="E-mail" variant="outlined" fullWidth margin="normal"
                    onChange={(event: React.ChangeEvent<{ value: string }>) => { setEmail(event.target.value) }} value={email} />

                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
            </form>
        </Container>
    )
}

ReactForm.schema = {
    title: 'editor.reactform.title',
    description: 'editor.reactform.description',
    type: 'object',
    properties: {},
}

export default ReactForm
