import Container from '@mui/material/Container'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Step from '@mui/material/Step'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Divider, Button, Grow, TableContainer, Table, Paper, TableRow, TableCell, TableBody, CardMedia } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import FormProvider from '../context/FormProvider'
import { useContext } from 'react'
import FormContext from '../context/FormContext'
import { ActionType } from '../context/FormReducer'
import HocPhoneField from './Form/PhoneField'
import HocCpfField from './Form/CPFField'
import HocRgField from './Form/RGField'
import HocCommonField from './Form/CommonField'
import HocCepField from './Form/CEPField'
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HocUploadButton from './common/UploadButton'
import { HocImageCard } from './common/ImagePreview'
import LogoImage from './common/LogoImage'
import ValidationSummaryTable from './ValidationTable'



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
    const { state, dispatch } = useContext(FormContext)

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6" color="primary">Informações do RESPONSÁVEL</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCommonField
                    label="Nome completo"
                    dispatch={dispatch}
                    actionType={ActionType.updateFullName}
                    value={state.formPayload.fullName}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCpfField dispatch={dispatch} value={state.formPayload.cpf} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocRgField dispatch={dispatch} value={state.formPayload.rg} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCommonField
                    label="Identidade de gênero"
                    dispatch={dispatch}
                    actionType={ActionType.updateGenderIdentity}
                    value={state.formPayload.genderIdentity}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCommonField
                    label="Nacionalidade"
                    dispatch={dispatch}
                    actionType={ActionType.updateNationality}
                    value={state.formPayload.nationality}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCommonField
                    label="Estado civil"
                    dispatch={dispatch}
                    actionType={ActionType.updateMaritalStatus}
                    value={state.formPayload.maritalStatus}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCommonField
                    label="Email"
                    dispatch={dispatch}
                    actionType={ActionType.updateEmail}
                    value={state.formPayload.email}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocPhoneField dispatch={dispatch} value={state.formPayload.phoneNumber} />
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCepField dispatch={dispatch} value={state.formPayload.cep} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCommonField
                    label="Rua"
                    dispatch={dispatch}
                    actionType={ActionType.updateStreet}
                    value={state.formPayload.street}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCommonField
                    label="Número"
                    dispatch={dispatch}
                    actionType={ActionType.updateHouseNumber}
                    value={state.formPayload.houseNumber}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCommonField
                    label="Complemento"
                    dispatch={dispatch}
                    actionType={ActionType.updateComplement}
                    value={state.formPayload.complement}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCommonField
                    label="Bairro"
                    dispatch={dispatch}
                    actionType={ActionType.updateNeighborhood}
                    value={state.formPayload.neighborhood}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCommonField
                    label="Cidade"
                    dispatch={dispatch}
                    actionType={ActionType.updateCity}
                    value={state.formPayload.city}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <HocCommonField
                    label="Estado"
                    dispatch={dispatch}
                    actionType={ActionType.updateState}
                    value={state.formPayload.state}
                />
            </Grid>

        </Grid>
    )
}

function UploadPersonalDocuments() {
    const { state, dispatch } = useContext(FormContext);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h6" color="primary">Documentos pessoais do RESPONSÁVEL</Typography>
            </Grid>
            <Grid item xs={12}>
                <HocUploadButton dispatch={dispatch} actionType={ActionType.addPersonalDocument} />
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                    {state.personalDocuments.map((value) => (
                        <HocImageCard base64Image={value} dispatch={dispatch} actionType={ActionType.removePersonalDocument} />
                    ))}
                </Box>
            </Grid>

        </Grid>
    )
}

function UploadMedicalDocuments() {
    const { state, dispatch } = useContext(FormContext);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h6" color="primary">Documentos médicos do PACIENTE</Typography>
            </Grid>
            <Grid item xs={12}>
                <HocUploadButton dispatch={dispatch} actionType={ActionType.addMedicalDocument} />
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                    {state.medicalDocuments.map((value) => (
                        <HocImageCard base64Image={value} dispatch={dispatch} actionType={ActionType.removeMedicalDocument} />
                    ))}
                </Box>
            </Grid>
        </Grid>
    )
}

function FormSummary() {
    const { state } = useContext(FormContext);

    return (
        <Container >
            <ValidationSummaryTable state={state}/>
        </Container>
    )
}

function MainContent(props: StepProps) {
    const pages = [
        <Form />,
        <UploadPersonalDocuments />,
        <UploadMedicalDocuments />,
        <FormSummary />
    ]
    return (
        <>{pages[props.step]}</>
    )
}

function NavigationButtons(props: StepProps) {
    const { dispatch } = useContext(FormContext)

    const theme = useTheme()

    const disableBackward = props.step == 0
    const disableForward = props.step == 3

    const increment = () => dispatch({ type: ActionType.incrementStep })
    const decrement = () => dispatch({ type: ActionType.decrementStep })

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
    const { state } = useContext(FormContext)
    const step = state.step

    return (
        <Container maxWidth="md">
            <LogoImage />
            <Title />
            <HorizontalStepper step={step} />
            <MainContent step={step} />
            <NavigationButtons step={step} />
        </Container>

    );
}


export default function () {

    return (
        <FormProvider>
            <Registry />
        </FormProvider>

    );
}