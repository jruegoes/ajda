"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";


type Attractions = {
  name: string;
  description: string;
  image: string;
};

export default function MustSeeAttractionsInput(props: {
  onValueChange: (value: any) => void;
  defaultValues?: any
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Dropdown selects */}

        <Input
          placeholder="ime atrakcije"
          {...register("name", { required: true })}
          defaultValue={props.defaultValues.name}
        />

        {errors.name && <span>Dodaj ime atrakcije</span>}

        <Input
          placeholder="opis"
          {...register("description", { required: true })}
          defaultValue={props.defaultValues.description}
        />

        {errors.name && <span>Dodaj opis</span>}

        <Input
          placeholder="link do slike"
          {...register("image", { required: true })}
          defaultValue={props.defaultValues.image}
        />

        {errors.name && <span>Dodaj link do slike</span>}

        <input type="submit" />
      </form>
    </>
  );
}
