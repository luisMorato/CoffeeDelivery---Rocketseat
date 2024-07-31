import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ClipLoader } from "react-spinners";

import { Button } from "../../../Components/Layout/Button/Button";
import { FaSearch } from "react-icons/fa";

import {
    BaseInput,
    InputContainer,
    OptionalInputDiv
} from "../Checkout.styles";
import { toast } from "react-toastify";

export const AddressForm = () => {
    const { 
        register,
        setValue,
        getValues,
        formState: {
            errors
        }
     } = useFormContext();

    const [isPending, startTransition] = useState(false);

    const formatCEPInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        const digits = e.target.value.replace(/\D/g, '');
        const formatted = digits.replace(/(\d{5})(\d{0,3})/, '$1-$2');

        setValue('cep', formatted);
    }

    const fetchAddressByCep = async () => {
        const cep = getValues('cep');
        const url = new URL(`https://viacep.com.br/ws/${cep.replace('-', '')}/json`);

        try {
            startTransition(true);
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    "content-type": "application/json",
                },
            });

            const resJson = await response.json();
            const { logradouro: street, localidade: city, bairro: neighborhood, uf: state } = resJson;
            
            if(!street && !city && !neighborhood && !state) {
                toast.error('Endereço Não Encontrado');
                return;
            }


            setValue('street', street);
            setValue('city', city);
            setValue('neighborhood', neighborhood);
            setValue('state', state);

        } catch (error) {
            console.error('Error: ', error);
        } finally {
            startTransition(false);
        }
    }

    return (
        <InputContainer>
            <div>
                <BaseInput
                    {...register('cep', { required: true, pattern: /^\d{5}-\d{3}$/, maxLength: 9 })}
                    width={"12.5rem"} 
                    error={errors['cep'] && true}
                    type="text"
                    placeholder="CEP"
                    maxLength={9}
                    disabled={isPending}
                    onChange={(e) => formatCEPInputValue(e)}
                />
                <Button
                    type="button"
                    onClick={fetchAddressByCep}
                    variant="lightPurple"
                    disabled={isPending}
                >
                   {isPending ? 
                        (<ClipLoader size={14} />)
                    :
                        (
                            <>
                                <FaSearch size={14} />
                                Pesquisar
                            </>
                        )
                    }
                </Button>
            </div>
            <BaseInput 
                {...register('street', { required: true })}
                error={errors['street'] && true}
                type="text"
                placeholder="Rua"
                disabled={isPending}
            />
            <div>
                <BaseInput 
                    {...register('houseNumber', { required: true, maxLength: 4 })}
                    error={errors['houseNumber'] && true}
                    width={"12.5rem"} 
                    type="text"
                    maxLength={4}
                    placeholder="Número"
                    disabled={isPending}
                />
                <OptionalInputDiv>
                    <BaseInput
                        {...register('complement')}
                        type="text"
                        placeholder="Complemento"
                        disabled={isPending}
                    />
                    <span>
                        Opcional
                    </span>
                </OptionalInputDiv>
            </div>
            <div>
                <BaseInput
                    {...register('neighborhood', { required: true })}
                    error={errors['neighborhood'] && true}
                    width={"12.5rem"} 
                    type="text"
                    placeholder="Bairro"
                    disabled={isPending}
                />
                <BaseInput 
                    {...register('city', { required: true })}
                    error={errors['city'] && true}
                    type="text" 
                    placeholder="Cidade"
                    disabled={isPending}
                />
                <BaseInput
                    {...register('state', { required: true, maxLength: 2 })}
                    error={errors['state'] && true}
                    width={"3.75rem"}
                    maxLength={2}
                    type="text"
                    placeholder="UF"
                    disabled={isPending}
                />
            </div>
        </InputContainer>
    )
}