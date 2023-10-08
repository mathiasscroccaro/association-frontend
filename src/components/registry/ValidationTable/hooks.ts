import { FormState } from "../../context/FormReducer";
import { ValidatedData, ValidatedFormPayload, ValidatedMedicalDocuments, ValidatedPersonalDocuments, ValidationTableData } from "./types";


function validateSize(value: string, size: number, field: string): ValidationTableData {
    if (value.length !== size) {
        return {
            value,
            errorMessage: `${field} apresenta ${value.length} caracteres, esperado ${size}`
        }
    } else {
        return {
            value,
        }
    }
}

function validateEmpty(value: string, field: string): ValidationTableData {
    if (value === "")
        return {
            value,
            errorMessage: `Necessário completar campo ${field}`
        }
    else
        return {
            value
        }
}

function noValidation(value: string): ValidationTableData {
    return {
        value
    }
}

function validateEmail(value: string): ValidationTableData {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(value);

    if (isValidEmail) {
        return {
            value
        }
    } else {
        return {
            value,
            errorMessage: "Não apresenta formato válido de e-mail"
        }
    }

}

function getValidatedFormPayload(formPayload: Associated) {
    const validatedFormPayload: ValidatedFormPayload = {
        cep: validateSize(formPayload.cep, 8, "CEP"),
        city: validateEmpty(formPayload.city, "Cidade"),
        complement: noValidation(formPayload.complement),
        cpf: validateSize(formPayload.cpf, 11, "CPF"),
        email: validateEmail(formPayload.email),
        fullName: validateEmpty(formPayload.fullName, "Nome completo"),
        genderIdentity: validateEmpty(formPayload.genderIdentity, "Identidade de gênero"),
        houseNumber: validateEmpty(formPayload.houseNumber, "Número da casa"),
        maritalStatus: validateEmpty(formPayload.maritalStatus, "Estado civil"),
        nationality: validateEmpty(formPayload.nationality, "Nacionalidade"),
        neighborhood: validateEmpty(formPayload.neighborhood, "Bairro"),
        phoneNumber: validateSize(formPayload.phoneNumber, 11, "Número de telefone"),
        rg: validateSize(formPayload.rg, 8, "RG"),
        state: validateEmpty(formPayload.state, "Estado"),
        street: validateEmpty(formPayload.street, "Rua"),
    }
    return validatedFormPayload;
}

function getValidatedPersonalDocuments(documents: string[]): ValidatedPersonalDocuments {
    if (documents.length == 0) {
        return {
            personalDocuments: [{
                value: "",
                errorMessage: "Nenhum documento com foto foi feito upload"
            }]
        }
    } else {
        return {
            personalDocuments: documents.map(document => { return { value: document } }) as unknown as ValidationTableData[]
        }
    }
}

function getValidatedMedicalDocuments(documents: string[]): ValidatedMedicalDocuments {
    if (documents.length == 0) {
        return {
            medicalDocuments: [{
                value: "",
                errorMessage: "Nenhum documento foi subido. Necessário agendar consulta"
            }]
        }
    } else {
        return {
            medicalDocuments: documents.map(document => { value: document }) as unknown as ValidationTableData[]
        }
    }
}

export function isThereAnyError(validatedData: ValidatedData): boolean {
    const formPayload = validatedData.formPayload;
    const personalDocuments = validatedData.formPayload;
    const medicalDocuments = validatedData.formPayload;

    var error: boolean = false;

    for (const [, value] of Object.entries(formPayload)) {
        if(value.errorMessage)
            return true;
    }

    return false;
}

export function getValidatedData(state: FormState): ValidatedData {
    const formPayload = getValidatedFormPayload(state.formPayload);
    const personalDocuments = getValidatedPersonalDocuments(state.personalDocuments);
    const medicalDocuments = getValidatedMedicalDocuments(state.medicalDocuments);

    return {
        formPayload,
        personalDocuments,
        medicalDocuments,
    }
}