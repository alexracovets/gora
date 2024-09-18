import { lazy, Suspense } from "react";

const Modal = lazy(() => import('./Modal'));
export default function ModalProgress() {

    return (
        <Suspense fallback={null}>
            <Modal />
        </Suspense>
    );
}