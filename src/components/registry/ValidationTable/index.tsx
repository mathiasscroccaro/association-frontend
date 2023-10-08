import { Box, Grid, Typography, IconButton, Paper, CardMedia } from "@mui/material";
import { ValidatedData, ValidatedEntryProps, ValidatedFormPayload, ValidatedPersonalDocuments, ValidationSummaryTableProps, ValidationTableData } from "./types";
import { FormState } from "../../context/FormReducer";
import { getValidatedData, isThereAnyError } from "./hooks";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function IconComponent({ isError }: { isError: boolean }) {
    const color = isError ? "error" : "success";
    return (
        <>{isError ? <ErrorOutlineIcon color={color} /> : <CheckCircleOutlineIcon color={color} />}</>
    );
}

function ValidatedEntry(props: ValidatedEntryProps) {
    let check;
    let error;

    if (props.data.errorMessage !== undefined) {
        error = <Grid item xs={12} sm={5}>
            <Typography variant="caption" color="red">
                {props.data.errorMessage}
            </Typography>
        </Grid>;
        check = <IconComponent isError={true} />
    } else {
        error = <></>;
        check = <IconComponent isError={false} />
    }

    const fieldValue = props.data.value === "" ? "---" : props.data.value;

    return (
        <Box sx={{ mt: 2 }}>
            <Grid container>
                <Grid item xs={10} sm={6}>
                    <Typography variant="h6" color="primary">{fieldValue}</Typography>
                </Grid>
                <Grid item xs={1}>
                    {check}
                </Grid>
                {error}
            </Grid>
        </Box>
    )
}

function SummaryFormPayload(props: { formPayload: ValidatedFormPayload }) {
    return (
        <Paper>
            <ValidatedEntry data={props.formPayload.fullName} />
            <ValidatedEntry data={props.formPayload.cpf} />
            <ValidatedEntry data={props.formPayload.rg} />
            <ValidatedEntry data={props.formPayload.phoneNumber} />
            <ValidatedEntry data={props.formPayload.email} />
            <ValidatedEntry data={props.formPayload.genderIdentity} />
            <ValidatedEntry data={props.formPayload.nationality} />
            <ValidatedEntry data={props.formPayload.maritalStatus} />
            <ValidatedEntry data={props.formPayload.cep} />
            <ValidatedEntry data={props.formPayload.street} />
            <ValidatedEntry data={props.formPayload.houseNumber} />
            <ValidatedEntry data={props.formPayload.complement} />
            <ValidatedEntry data={props.formPayload.neighborhood} />
            <ValidatedEntry data={props.formPayload.city} />
            <ValidatedEntry data={props.formPayload.state} />
        </Paper>
    )
}

function ImageView(props: { base64Image: string }) {
    return (
        <Paper elevation={3} sx={{ m: 5 }}>
            <CardMedia
                component="img"
                alt="Base64 Image"
                sx={{ height: "300px", objectFit: 'contain' }}
                image={props.base64Image}
            />
        </Paper>
    )
}

function SummaryPersonalDocument(props: ValidatedPersonalDocuments) {
    const { personalDocuments } = props;

    const emptyDocument = personalDocuments.length === 1 && personalDocuments[0].errorMessage;

    if (emptyDocument) {
        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
                <Paper elevation={3} sx={{ m: 5, p: 5, display: 'flex', alignItems: 'center'}}>
                    <IconComponent isError />
                    <Typography variant="caption" color="red" sx={{ ml:2 }}>{props.personalDocuments[0].errorMessage}</Typography>
                </Paper>
            </Box>
        )

    }

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center' }}>
            {personalDocuments.map((document) => (
                <ImageView key={document.value} base64Image={document.value} />
            ))
            }
        </Box>

    );
}

export default function ValidationSummaryTable(props: ValidationSummaryTableProps) {
    const validatedData = getValidatedData(props.state);
    const error = isThereAnyError(validatedData);

    return (
        <>
            <SummaryFormPayload formPayload={validatedData.formPayload} />
            <SummaryPersonalDocument personalDocuments={validatedData.personalDocuments.personalDocuments} />
        </>
    )
}