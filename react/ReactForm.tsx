import React, { useState } from 'react'
import { Button, TextField, Container, Typography, IconButton } from "@material-ui/core";
import CachedIcon from '@material-ui/icons/Cached';
import axios from "axios";

// import {useQuery} from 'react-apollo';

interface ReactFormProps { }

const ReactForm: StorefrontFunctionComponent<ReactFormProps> = ({ }) => {
    const [fill, setFill] = useState(false)
    const [nome, setNome] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const cadastraLead = (nome: String, email: String, number: String) => {
        axios.post("https://7n2b3cjwuf.execute-api.us-east-1.amazonaws.com/prod/leads", {
            "name": nome,
            "phone": number,
            "email": email,
            "type": "prospect"
        }).then(() => setFill(true))
            .catch(error => { console.error("ops! ocorreu um erro" + error); })
    }

    const reloadForm = () => {
        setFill(false)
        setNome('')
        setNumber('')
        setEmail('')
    }

    return (
        <>
            <div style={{ padding: '20px 0' }}>
                <Container style={{ backgroundColor: '#e9e9e9', border: '2px solid black', borderRadius: '10px', padding: '50px' }} component="article" maxWidth="sm">
                    <Typography variant="h4" component="h2" align="center">
                        Cadastre-se para receber promoções!
                    </Typography>
                    {!fill &&

                        <form onSubmit={(event) => {
                            event.preventDefault();
                            cadastraLead(nome, email, number);
                        }}>
                            <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"
                                onChange={(event: React.ChangeEvent<{ value: string }>) => { setNome(event.target.value) }} value={nome} />
                            <TextField id="number" label="Telefone" variant="outlined" fullWidth margin="normal"
                                onChange={(event: React.ChangeEvent<{ value: string }>) => { setNumber(event.target.value) }} value={number} />
                            <TextField id="email" label="E-mail" variant="outlined" fullWidth margin="normal"
                                onChange={(event: React.ChangeEvent<{ value: string }>) => { setEmail(event.target.value) }} value={email} />

                            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
                        </form>
                    }
                    {
                        fill &&
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center', margin: '20px 0', color: 'green' }}>
                                Cadastro realizado com sucesso!
                            </div>
                            <IconButton onClick={() => reloadForm() } style={{ flex: '0 0 0' }}>
                                <CachedIcon />
                            </IconButton>
                        </div>
                    }

                </Container>
            </div>
        </>
    )
}

ReactForm.schema = {
    title: 'editor.reactform.title',
    description: 'editor.reactform.description',
    type: 'object',
    properties: {},
}

export default ReactForm
