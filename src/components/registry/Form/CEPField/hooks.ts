import { Dispatch } from "react";
import { Action, ActionType } from "../../../context/FormReducer";

export function maskCEPNumber(rawPhoneNumber: string) {
    return rawPhoneNumber.substring(0, 8).replace(/(\d{5})(\d{3})/, '$1-$2');
}

export function unmaskCEPNumber(maskedNumber: string) {
    return maskedNumber.replace(/[^0-9]/g, '').substring(0, 8)
}

function mapUfToState(uf: string): string {
    const states: { [key: string]: string } = {
        AC: 'Acre',
        AL: 'Alagoas',
        AP: 'Amapá',
        AM: 'Amazonas',
        BA: 'Bahia',
        CE: 'Ceará',
        DF: 'Distrito Federal',
        ES: 'Espírito Santo',
        GO: 'Goiás',
        MA: 'Maranhão',
        MT: 'Mato Grosso',
        MS: 'Mato Grosso do Sul',
        MG: 'Minas Gerais',
        PA: 'Pará',
        PB: 'Paraíba',
        PR: 'Paraná',
        PE: 'Pernambuco',
        PI: 'Piauí',
        RJ: 'Rio de Janeiro',
        RN: 'Rio Grande do Norte',
        RS: 'Rio Grande do Sul',
        RO: 'Rondônia',
        RR: 'Roraima',
        SC: 'Santa Catarina',
        SP: 'São Paulo',
        SE: 'Sergipe',
        TO: 'Tocantins',
    };

    return states[uf] || 'Unknown';
}

export async function fetchCEPÌnformationAndFill(cep: string, dispatch: Dispatch<Action>) {
    if (cep.length === 8) {
        const cepApiBaseURL = "https://viacep.com.br/ws";
        const cepApiEndpoint = cepApiBaseURL + `/${cep}/json/`
        const response = await fetch(cepApiEndpoint);
        const body: AddressInfo = await response.json();

        dispatch({
            type: ActionType.updateCity,
            payload: body.localidade,
        })

        dispatch({
            type: ActionType.updateNeighborhood,
            payload: body.bairro,
        })

        dispatch({
            type: ActionType.updateStreet,
            payload: body.logradouro,
        })

        dispatch({
            type: ActionType.updateState,
            payload: mapUfToState(body.uf),
        })
    }
}
