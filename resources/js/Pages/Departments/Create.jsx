import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

const Create = ({ auth, action, department, btn, id, edit }) => {

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: department ? department.name : '',
        description: department ? department.description : '',
    })
    console.log(errors.name);

    const submit = (e) => {
        e.preventDefault();
        if (action === 'create') {
            post(route('departments.create'));
        }
        if (edit) {
            put(route('departments.update', { id }))
        }
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
        // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard_2</h2>}
        >
            <GuestLayout >
                <Head title="Departamentos" />

                <form onSubmit={submit}>
                    <div>
                        <InputLabel className='mt-3' htmlFor="name" value="Nombre Departamento" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-3 mb-3 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}

                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel className='mt-3' htmlFor="description" value="Descripción" />

                        <TextInput
                            id="description"
                            name="description"
                            value={data.description}
                            className="mt-3 mb-10 block w-full"
                            autoComplete="description"
                            isFocused={true}
                            onChange={(e) => setData('description', e.target.value)}

                        />
                        <InputError message={errors.description} className="mt-2" />

                        <div className="flex items-center justify-end mt-4">

                            <PrimaryButton className="ms-4 mb-8" disabled={processing}>
                                {btn}
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </GuestLayout>

        </AuthenticatedLayout>
    )
}

export default Create