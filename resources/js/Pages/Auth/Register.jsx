import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register({ user, action, edit, btn, id, document_types, gender_types }) {
    // console.log(gender_types);
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: user ? user.name : '',
        last_name: user ? user.last_name : '',
        address: user ? user.address : '',
        phone: user ? user.phone : '',
        document_type: user ? user.document_type : '',
        document_number: user ? user.document_number : '',
        birth_date: user ? user.birth_date : '',
        gender: user ? user.gender : '',
        email: user ? user.email : '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        if (action === 'create') {
            post(route('users.create'));
        } else {
            post(route('register'));
        }
        if (edit) {
            put(route('users.update', { id }));
        }

    };

    return (
        <GuestLayout reg={true}>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div className=" mt-5 grid grid-flow-row sm:grid-flow-col gap-2">
                    <div>
                        <InputLabel htmlFor="name" value="Nombre" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="last_name" value="Apellido" />

                        <TextInput
                            id="last_name"
                            name="last_name"
                            value={data.last_name}
                            className="mt-1 block w-full"
                            autoComplete="last_name"
                            isFocused={true}
                            onChange={(e) => setData('last_name', e.target.value)}
                            
                        />
                        <InputError message={errors.last_name} className="mt-2" />
                    </div>
                </div>

                <div className=" mt-5 grid grid-flow-row sm:grid-flow-col gap-2">
                    <div>
                        <InputLabel htmlFor="address" value="Direccion" />

                        <TextInput
                            id="address"
                            name="address"
                            value={data.address}
                            className="mt-1 block w-full"
                            autoComplete="address"
                            isFocused={true}
                            onChange={(e) => setData('address', e.target.value)}
                            
                        />
                        <InputError message={errors.address} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="phone" value="Telefono" />

                        <TextInput
                            id="phone"
                            name="phone"
                            value={data.phone}
                            className="mt-1 block w-full"
                            autoComplete="phone"
                            isFocused={true}
                            onChange={(e) => setData('phone', e.target.value)}
                            
                        />
                        <InputError message={errors.phone} className="mt-2" />
                    </div>
                </div>

                <div className=" mt-5 grid grid-flow-row sm:grid-flow-col gap-2">
                    <div>
                        <InputLabel htmlFor="document_type" value="Tipo de Documento" />

                        <select
                            id="document_type"
                            value={data.document_type}
                            onChange={(e) => setData('document_type', e.target.value)}
                            className="mt-1 block w-full select_text border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        >
                            <option value="">Selecciona un tipo de documento</option>
                            {document_types.map((document) => (
                                <option key={document.id} value={document.document_type}>
                                    {document.document_name}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.document_type} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="document_number" value="Numero de Documento" />

                        <TextInput
                            id="document_number"
                            name="document_number"
                            value={data.document_number}
                            className="mt-1 block w-full"
                            autoComplete="document_number"
                            isFocused={true}
                            onChange={(e) => setData('document_number', e.target.value)}
                            
                        />
                        <InputError message={errors.document_number} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="birth_date" value="Fecha de Nacimiento" />

                        <TextInput
                            id="birth_date"
                            name="birth_date"
                            type="date"
                            max={new Date().toISOString().split("T")[0]}
                            value={data.birth_date}
                            className="mt-1 block w-full"
                            autoComplete="birth_date"
                            isFocused={true}
                            onChange={(e) => setData('birth_date', e.target.value)}
                            
                        />
                        <InputError message={errors.birth_date} className="mt-2" />
                    </div>
                </div>

                <div className=" mt-5 grid grid-flow-row sm:grid-flow-col gap-2">
                    <div >
                        <InputLabel htmlFor="gender" value="Genero" />

                        <select
                            id="gender"
                            value={data.gender}
                            onChange={(e) => setData('gender', e.target.value)}
                            className="mt-1 block w-full select_text border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        >
                            <option value="">Selecciona un genero</option>
                            {gender_types.map((gender) => (
                                <option key={gender.id} value={gender.gender_type}>
                                    {gender.name}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.gender} className="mt-2" />
                    </div>

                    <div >
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>
                </div>

                <div className=" mt-5 grid grid-flow-row sm:grid-flow-col gap-2">
                    {/* los campos de contraseña solo sean requeridos cuasndo se va a registrar un nuevo empleado */}
                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required={user ? false : true}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required={user ? false : true}
                        />
                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        {!edit && (
                            <p>

                                Ya estas registrado?
                            </p>
                        )}
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        {btn}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
