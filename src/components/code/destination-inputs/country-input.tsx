"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { AutoselectInput } from "@/components/code/autoselect-input";
import { countries } from "@/lib/constants/countries";
import { currencies } from "@/lib/constants/currencies";
import { languages } from "@/lib/constants/languages";
import { Button } from "@/components/ui/button";
import styles from './destination-inputs.module.css'
import { Textarea } from "@/components/ui/textarea";

type CountryInputs = {
  country: string;
  language: string;
  currency: string;
  cityArea: string;
  description: string;
};

export default function CountryInput(props: {
  onValueChange: (value: any) => void;
  defaultValues?: any;
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
    <div className={styles.container}>
      <div className={styles.title}>Dodaj podatke o državi in mestu destinacije</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Dropdown selects */}

        <div className={styles.inputContainer}>
          <div className={styles.inputTitle}>Izberi državo</div>
          <AutoselectInput
            onValueChange={(value: string) =>
              handleValueFromList(value, "country")
            }
            list={countries}
            defaultValue={props.defaultValues.country}
          />
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputTitle}>Izberi jezik</div>
          <AutoselectInput
            onValueChange={(value: string) =>
              handleValueFromList(value, "language")
            }
            list={languages}
            defaultValue={props.defaultValues.language}
          />
        </div>

        <div className={styles.inputContainer}>
          <div className={styles.inputTitle}>Izberi valuto</div>
          <AutoselectInput
            onValueChange={(value: string) =>
              handleValueFromList(value, "currency")
            }
            list={currencies}
            defaultValue={props.defaultValues.currency}
          />
        </div>

        <div className={styles.inputContainer}>
          <div>Ime mesta oz. destinacije</div>
          <Input
            className={styles.input}
            placeholder="mesto oz. destinacija"
            {...register("cityArea", { required: true })}
            defaultValue={props.defaultValues.cityArea}
          />

          {errors.cityArea && <span>Vpiši mesto oz. ime destinacije</span>}
        </div>
        <div className={styles.inputContainer}>
          <div>Opis države</div>
          <Textarea
            className={styles.input}
            placeholder="opis"
            {...register("description", { required: true })}
            defaultValue={props.defaultValues.description}
          />

          {errors.cityArea && <span>Vpiši mesto oz. ime destinacije</span>}
        </div>
        <div className="styles.confirm">
          <Button>
            <input className={styles.submitButton} type="submit" />
          </Button>
        </div>
      </form>
    </div>
  );
}
