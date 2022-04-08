import { useNavigate } from 'react-router-dom'
import Layout from '../Common/Layout'

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <Layout>
            <div className="mt-30 text-center">
                <h1 className="font-cursive text-6xl">404 Not Found</h1>
                <p className="my-10 text-xl lg:text-2xl">Requested route not found :(</p>
                <button
                    type="button"
                    className="rounded-md font-medium bg-indigo-500 py-2 px-3 text-primary-200"
                    onClick={() => navigate('/')}
                >
                    Back to Home
                </button>
            </div>
        </Layout>
    )
}
