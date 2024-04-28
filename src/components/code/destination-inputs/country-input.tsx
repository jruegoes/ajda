"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { AutoselectInput } from "@/components/code/autoselect-input";
import { countries } from "@/lib/constants/countries";
import { currencies } from "@/lib/constants/currencies";
import { languages } from "@/lib/constants/languages";

type CountryInputs = {
  country: string;
  language: string;
  currency: string;
  cityArea: string;
};

export default function CountryInput(props: {
  onValueChange: (value: any) => void;
  defaultValues?: any
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CountryInputs>();
  const onSubmit: SubmitHandler<CountryInputs> = (data) => {
    props.onValueChange(data);
  };
  const handleValueFromList = (
    value: string,
    formInput: keyof CountryInputs
  ) => {
    setValue(formInput, value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Dropdown selects */}
        <AutoselectInput
          onValueChange={(value: string) =>
            handleValueFromList(value, "country")
          }
          list={countries}
          defaultValue={props.defaultValues.country}
        />

        <AutoselectInput
          onValueChange={(value: string) =>
            handleValueFromList(value, "language")
          }
          list={languages}
          defaultValue={props.defaultValues.language}
        />

        <AutoselectInput
          onValueChange={(value: string) =>
            handleValueFromList(value, "currency")
          }
          list={currencies}
          defaultValue={props.defaultValues.currency}
        />

        <Input
          placeholder="mesto oz. destinacija"
          {...register("cityArea", { required: true })}
          defaultValue={props.defaultValues.cityArea}
        />

        {errors.cityArea && <span>Vpiši mesto oz. ime destinacije</span>}

        <input type="submit" />
      </form>
    </>
  );
}
