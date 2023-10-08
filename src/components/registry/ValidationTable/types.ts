import { FormState } from "../../context/FormReducer";

export type ValidatedFormPayload = {
    fullName: ValidationTableData;
    cpf: ValidationTableData;
    rg: ValidationTableData;
    genderIdentity: ValidationTableData;
    nationality: ValidationTableData;
    maritalStatus: ValidationTableData;
    email: ValidationTableData;
    phoneNumber: ValidationTableData;
    cep: ValidationTableData;
    street: ValidationTableData;
    houseNumber: ValidationTableData;
    complement: ValidationTableData;
    neighborhood: ValidationTableData;
    city: ValidationTableData;
    state: ValidationTableData;
    // patients?: Patient; 
}

export type ValidatedMedicalDocuments = {
    medicalDocuments: ValidationTableData[];
}

export type ValidatedPersonalDocuments = {
    personalDocuments: ValidationTableData[];
}

export type ValidatedData = {
    formPayload: ValidatedFormPayload,
    personalDocuments: ValidatedPersonalDocuments,
    medicalDocuments: ValidatedMedicalDocuments,
}

export type ValidationTableData = {
    value: string;
    errorMessage?: string;
}

export type ValidatedEntryProps = {
    data: ValidationTableData
}

export type ValidationSummaryTableProps = {
    state: FormState
}