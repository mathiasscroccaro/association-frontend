import Container from '@mui/material/Container'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Step from '@mui/material/Step'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Divider, Button, Grow } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import CounterProvider from '../context/FormProvider'
import { useContext } from 'react'
import CounterContext from '../context/FormContext'



const stepLabels = [
    "Cadastro de informações",
    "Documentação Pessoal",
    "Documantação Médica",
    "Confirmação"
]

type StepError = {
    step: number;
    message: string;
}

type StepProps = {
    step: number;
    stepErrorList?: StepError[];
}

function HorizontalStepper(props: StepProps) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const orientation = isMobile ? 'vertical' : 'horizontal'

    return (
        <Box sx={{ pt: 5, pb: 5 }}>
            <Stepper activeStep={props.step} orientation={orientation}>
                {stepLabels.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    )
}

function Title() {
    return (
        <Typography variant="h4" color="primary">Cadastro</Typography>
    )
}

function Form() {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Nome completo"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="CPF"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="RG"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Identidade de gênero"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Nacionalidade"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Estado civil"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Email"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Telefone celular"
                />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="CEP"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Rua"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Número"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Complemento"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Bairro"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Cidade"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    id=""
                    label="Estado"
                />
            </Grid>

        </Grid>
    )
}

function UploadPersonalDocuments() {
    return (<></>)
}

function UploadMedicalDocuments() {
    return (<></>)
}

function AboutRegistry() {
    return (
        <Box sx={{ pt: 2, pb: 2 }}>
            <Typography variant="h6" color="primary">Informações do RESPONSÁVEL</Typography>
        </Box>
    )
}

function MainContent(props: StepProps) {
    const pages = [
        <Form />
    ]
    return (
        <>{pages[props.step]}</>
    )
}

function NavigationButtons(props: StepProps) {
    const { dispatch } = useContext(CounterContext)
    
    const theme = useTheme()

    const disableBackward = props.step == 0
    const disableForward = props.step == 3

    const increment = () => dispatch({ type: "INCREMENT" })
    const decrement = () => dispatch({ type: "DECREMENT" })

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pt: 3, maxWidth: theme.breakpoints.values.sm, m: 'auto' }}>
            <Button disabled={disableBackward} variant="contained" color="primary" onClick={decrement}>
                Voltar
            </Button>
            <Button disabled={disableForward} variant="contained" color="primary" onClick={increment}>
                Próximo
            </Button>
        </Box>
    )
}

function Registry() {
    const { state } = useContext(CounterContext)
    const step = state.count

    console.log(step, state)

    return (
        <Container maxWidth="md">
            <Title />
            <HorizontalStepper step={step} />
            <AboutRegistry />
            <MainContent step={step} />
            <NavigationButtons step={step} />
        </Container>

    );
}


export default function () {

    return (
        <CounterProvider>
            <Registry />           
        </CounterProvider>

    );
}