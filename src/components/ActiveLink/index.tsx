import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

export function ActiveLink({children,  shouldMatchExactHref = false, ...rest}: ActiveLinkProps){
    //qual a url q o user esta da app
    const { asPath } = useRouter()
    //por padrao o link n esta ativo
    let isActive = false;

    //verificacao da url, se esta no path atual
    if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true
    }

    // ou pelo menos comecar com path (users\create)
    if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)) )) {
        isActive = true
    }

    //clonar o elemento e modificar
    return(
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gray.50'
            })}
        </Link>
    );
}