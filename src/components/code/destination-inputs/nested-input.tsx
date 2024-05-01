"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import styles from './destination-inputs.module.css'

type Attractions = {
  name: string;
  description: string;
  image: string;
};

export default function NestedInput(props: {
  onValueChange: (value: any) => void;
  defaultValues?: any;
  index?: number
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Attractions>();
  const onSubmit: SubmitHandler<Attractions> = (data) => {
    props.onValueChange(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
       Podatki o atrakciji #{(props.index ?? 1) + 1}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <div>Ime atrakcije</div>
          <Input
            placeholder="ime atrakcije"
            {...register("name", { required: true })}
            defaultValue={props.defaultValues.name}
            onBlur={handleSubmit(onSubmit)}
          />
          {errors.name && <span>Dodaj ime atrakcije</span>}
        </div>

        <div className={styles.inputContainer}>
          <div>Opis atrakcije</div>
          <Input
            placeholder="opis"
            {...register("description", { required: true })}
            defaultValue={props.defaultValues.description}
            onBlur={handleSubmit(onSubmit)}
          />
          {errors.name && <span>Dodaj opis</span>}
        </div>

        <div className={styles.inputContainer}>
          <div>Link slike</div>
          <Input
            placeholder="link do slike"
            {...register("image", { required: true })}
            defaultValue={props.defaultValues.image}
            onBlur={handleSubmit(onSubmit)}
          />

          {errors.name && <span>Dodaj link do slike</span>}
        </div>
      </form>
    </div>
  );
}
