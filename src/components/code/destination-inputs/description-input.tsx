import { useForm, SubmitHandler } from "react-hook-form";
import styles from './destination-inputs.module.css'
import { Textarea } from "@/components/ui/textarea";

type DescriptionInput = {
    description: string;
};

export default function DescriptionInput(props: {
    onValueChange: (value: any) => void;
    defaultValues?: any;
}) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<DescriptionInput>();
    const onSubmit: SubmitHandler<DescriptionInput> = (data) => {
        props.onValueChange(data);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setValue("description", value);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputContainer}>
                    <div className={styles.inputTitle}>Opis</div>
                    <Textarea
                        className={styles.input}
                        placeholder="opis"
                        {...register("description", { required: true })}
                        defaultValue={props.defaultValues.description}
                        onChange={handleInputChange}
                        onBlur={handleSubmit(onSubmit)} // Submit form when the input loses focus
                    />
                    {errors.description && <span>Vpiši opis</span>}
                </div>
                {/* Button is no longer needed */}
            </form>
        </div>
    );
}
