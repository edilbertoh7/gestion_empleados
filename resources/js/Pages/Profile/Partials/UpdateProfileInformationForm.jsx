import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;
    console.log(user);

    const dateOfBrirth = user.birth_date; // Este sería tu dato "data.birth_date"
    const dateSplit = dateOfBrirth.split('-');
    const formatDarte = `${dateSplit[0]}-${dateSplit[2]}-${dateSplit[1]}`;
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        last_name: user.last_name,
        address: user.address,
        phone: user.phone,
        document_type: user.document_type,
        document_number: user.document_number,
        birth_date: formatDarte,
        gender: user.gender,
        email: user.email,
    });



    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Información de perfil</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Actualice la información de su perfil, la contraseña de acceso y correo electrónico.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className=" mt-5 grid grid-flow-row sm:grid-flow-col gap-2">
                    <div>
                        <InputLabel htmlFor="name" value="Nombre" />

                        <TextInput
                            id="name"
                            className="mt-1 block w-full"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            isFocused
                            autoComplete="name"
                        />

                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div>
                        <InputLabel htmlFor="last_name" value="Apellido" />

                        <TextInput
                            id="last_name"
                            className="mt-1 block w-full"
                            value={data.last_name}
                            onChange={(e) => setData('last_name', e.target.value)}
                            required
                            isFocused
                            autoComplete="last_name"
                        />
                        <InputError className="mt-2" message={errors.last_name} />
                    </div>
                </div>

                <div className=" mt-5 grid grid-flow-row sm:grid-flow-col gap-2">

                    <div>
                        <InputLabel htmlFor="address" value="Direccion" />

                        <TextInput
                            id="address"
                            className="mt-1 block w-full"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            required
                            isFocused
                            autoComplete="address"
                        />
                        <InputError className="mt-2" message={errors.address} />
                    </div>

                    <div>
                        <InputLabel htmlFor="phone" value="Telefono" />

                        <TextInput
                            id="phone"
                            className="mt-1 block w-full"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            required
                            isFocused
                            autoComplete="phone"
                        />
                        <InputError className="mt-2" message={errors.phone} />
                    </div>
                </div>

                <div className=" mt-5 grid grid-flow-row sm:grid-flow-col gap-2">
                    <div>
                        <InputLabel htmlFor="document_type" value="Tipo de Documento" />

                        <TextInput
                            id="document_type"
                            className="mt-1 block w-full"
                            value={data.document_type}
                            onChange={(e) => setData('document_type', e.target.value)}
                            required
                            isFocused
                            autoComplete="document_type"
                        />
                        <InputError className="mt-2" message={errors.document_type} />
                    </div>

                    <div>
                        <InputLabel htmlFor="document_number" value="número de Documento" />

                        <TextInput
                            id="document_number"
                            className="mt-1 block w-full"
                            value={data.document_number}
                            onChange={(e) => setData('document_number', e.target.value)}
                            required
                            isFocused
                            autoComplete="document_number"
                        />
                        <InputError className="mt-2" message={errors.document_number} />
                    </div>

                    <div>
                        <InputLabel htmlFor="birth_date" value="Fecha de Nacimiento" />

                        <TextInput
                            id="birth_date"
                            type="date"
                            max={new Date().toISOString().split("T")[0]}
                            className="mt-1 block w-full"
                            value={data.birth_date}
                            onChange={(e) => setData('birth_date', e.target.value)}
                            required
                            isFocused
                            autoComplete="birth_date"
                        />
                        <InputError className="mt-2" message={errors.birth_date} />
                    </div>
                </div>

                <div className=" mt-5 grid grid-flow-row sm:grid-flow-col gap-2">
                    <div>
                        <InputLabel htmlFor="gender" value="Genero" />

                        <TextInput
                            id="gender"
                            className="mt-1 block w-full"
                            value={data.gender}
                            onChange={(e) => setData('gender', e.target.value)}
                            required
                            isFocused
                            autoComplete="gender"
                        />
                        <InputError className="mt-2" message={errors.gender} />
                    </div>

                    <div>
                        <InputLabel htmlFor="email" value="Correo electrónico" />

                        <TextInput
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoComplete="username"
                        />
                        <InputError className="mt-2" message={errors.email} />
                    </div>
                </div>
                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Guardar</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
