export interface FormState {
    step: number;
    formPayload: Associated;
    personalDocuments: string[];
    medicalDocuments: string[];
}

const initialState: FormState = {
    step: 0,
    formPayload: {
        fullName: "",
        cpf: "",
        rg: "",
        genderIdentity: "",
        nationality: "",
        maritalStatus: "",
        email: "",
        phoneNumber: "",
        cep: "",
        street: "",
        houseNumber: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
    },
    personalDocuments: [],
    medicalDocuments: [],
};

export enum ActionType {
    incrementStep = "INCREMENT_STEP",
    decrementStep = "DECREMENT_STEP",
    updateFullName = "UPLOAD_FULLNAME",
    updateCpf = "UPLOAD_CPF",
    updateRg = "UPDATE_RG",
    updateGenderIdentity = "UPDATE_GENDER_IDENTITY",
    updateNationality = "UPDATE_NATIONALITY",
    updateMaritalStatus = "UPDATE_MARITAL_STATUS",
    updateEmail = "UPDATE_EMAIL",
    updatePhoneNumber = "UPDATE_PHONE_NUMBER",
    updateCep = "UPDATE_CEP",
    updateStreet = "UPDATE_STREET",
    updateHouseNumber = "UPDATE_HOUSE_NUMBER",
    updateComplement = "UPDATE_COMPLEMENT",
    updateNeighborhood = "UPDATE_NEIGHBORHOOD",
    updateCity = "UPDATE_CITY",
    updateState = "UPDATE_STATE",

    addPersonalDocument = "ADD_PERSONAL_DOCUMENT",
    removePersonalDocument = "REMOVE_PERSONAL_DOCUMENT",

    addMedicalDocument = "ADD_MEDICAL_DOCUMENT",
    removeMedicalDocument = "REMOVE_MEDICAL_DOCUMENT",
}

export type Action = { type: ActionType, payload?: string };

const counterReducer = (state: FormState, action: Action): FormState => {
    switch (action.type) {
        case 'INCREMENT_STEP':
            return { ...state, step: state.step + 1 };
        case 'DECREMENT_STEP':
            return { ...state, step: state.step - 1 };
        case ActionType.updateFullName:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, fullName: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateCpf:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, cpf: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateRg:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, rg: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateGenderIdentity:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, genderIdentity: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateNationality:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, nationality: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateMaritalStatus:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, maritalStatus: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateEmail:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, email: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updatePhoneNumber:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, phoneNumber: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateCep:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, cep: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateStreet:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, street: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateHouseNumber:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, houseNumber: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateComplement:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, complement: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateNeighborhood:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, neighborhood: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateCity:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, city: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.updateState:
            if (action.payload !== undefined) {
                return { ...state, formPayload: { ...state.formPayload, state: action.payload } };
            } else {
                return { ...state };
            }
        case ActionType.addPersonalDocument:
            if (action.payload !== undefined) {
                return { ...state, personalDocuments: [...state.personalDocuments, action.payload] };
            } else {
                return { ...state };
            }
        case ActionType.removePersonalDocument:
            if (action.payload !== undefined) {
                return { ...state, personalDocuments: [...state.personalDocuments].filter((doc) => doc !== action.payload) };
            } else {
                return { ...state };
            }
        case ActionType.addMedicalDocument:
            if (action.payload !== undefined) {
                return { ...state, medicalDocuments: [...state.medicalDocuments, action.payload] };
            } else {
                return { ...state };
            }
        case ActionType.removeMedicalDocument:
            if (action.payload !== undefined) {
                return { ...state, medicalDocuments: [...state.medicalDocuments].filter((doc) => doc !== action.payload) };
            } else {
                return { ...state };
            }
        default:
            return { ...state }
    }
};

export { initialState, counterReducer };