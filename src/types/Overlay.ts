/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export interface OverlayProps extends React.PropsWithChildren {
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
	modalRef: any;
	isPersistent?: boolean;
}
