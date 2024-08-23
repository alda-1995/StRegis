import axios from 'axios'

async function getDataFetch(query) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const axiosCustom = () => {
  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_MAIL_URL}`,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  })
}

export async function homeQuery() {
  const res = await getDataFetch(`
  {
  page(id: "home", idType: URI) {
    inicio {
      bloquePrincipal {
        titulo
        texto
        imagenFondo {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        boton {
          texto
          tipo
          pagina
          url
          archivo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      bloqueEventos {
        supertitulo
        titulo
        texto
        listaEventos {
          titulo
          texto
          fecha
          imagen {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          boton {
            texto
            tipo
            pagina
            url
            listaDeArchivos {
              nombre
              archivo {
                altText
                title
                srcSet
                sizes
                sourceUrl
                mediaType
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
      }
      bloqueActividades {
        supertitulo
        titulo
        texto
        fecha
        imagen {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        boton {
          texto
          tipo
          pagina
          url
          archivo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      bloqueRestaurantes {
        supertitulo
        titulo
        texto
        listaDeRestaurantes {
          ... on Restaurante {
            slug
            title
            datosRestaurantes {
              descripcion
              imagen {
                altText
                title
                srcSet
                sizes
                sourceUrl
                mediaType
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
              listaDeMenus {
                nombre
                archivoMenu {
                  altText
                  title
                  srcSet
                  sizes
                  sourceUrl
                  mediaType
                  mediaItemUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              url
              horarios
            }
            restaurantescats {
              nodes {
                name
              }
            }
          }
        }
      }
      bloqueExperiencias {
        supertitulo
        titulo
        texto
        listasDeExperiencias {
          titulo
          texto
          imagen {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          tipoDeUrl
          url
          correo
          listaDeArchivos {
            nombre
            archivo {
              altText
              title
              srcSet
              sizes
              sourceUrl
              mediaType
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
      bloqueSpa {
        supertitulo
        titulo
        texto
        boton1 {
          texto
          tipo
          pagina
          url
          archivo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          correo
        }
        boton2 {
          texto
          tipo
          pagina
          url
          archivo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          correo
        }
        listaDeServicios {
          supertitulo
          titulo
          texto
          imagen {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          boton {
            texto
            tipo
            pagina
            url
            correo
            listaDeArchivos {
              nombre
              archivo {
                altText
                title
                srcSet
                sizes
                sourceUrl
                mediaType
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
      }
      bloqueClasesDegustaciones {
        supertitulo
        titulo
        texto
        listaDeClasesYDegustacion {
          ... on Tasting {
            title
            datosClases {
              descripcion
              imagen {
                altText
                title
                srcSet
                sizes
                sourceUrl
                mediaType
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
              datosModal {
                titulo
                descripcion
                correo
                imagen {
                  altText
                  title
                  srcSet
                  sizes
                  sourceUrl
                  mediaType
                  mediaItemUrl
                  mediaDetails {
                    height
                    width
                  }
                }
                detalles
                textoInformativo
              }
            }
          }
        }
      }
      bloqueRituales {
        supertitulo
        titulo
        texto
        listaCards {
          fecha
          titulo
          texto
          imagen {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      bloqueClub {
        supertitulo
        titulo
        texto
        fecha
        imagen1 {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        imagen2 {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        imagen3 {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        imagenFinal {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        boton {
          texto
          tipo
          pagina
          url
          archivo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
}
  `)

  return res.data
}

export async function inicioQuery() {
  const res = await getDataFetch(`
  {
  page(id: "inicio", idType: URI) {
    inicio {
      bloquePrincipal {
        titulo
        texto
        imagenFondo {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        boton {
          texto
          tipo
          pagina
          url
          archivo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      bloqueEventos {
        supertitulo
        titulo
        texto
        listaEventos {
          titulo
          texto
          fecha
          imagen {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          boton {
            texto
            tipo
            pagina
            url
            listaDeArchivos {
              nombre
              archivo {
                altText
                title
                srcSet
                sizes
                sourceUrl
                mediaType
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
      }
      bloqueActividades {
        supertitulo
        titulo
        texto
        fecha
        imagen {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        boton {
          texto
          tipo
          pagina
          url
          archivo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      bloqueRestaurantes {
        supertitulo
        titulo
        texto
        listaDeRestaurantes {
          ... on Restaurante {
            slug
            title
            datosRestaurantes {
              descripcion
              imagen {
                altText
                title
                srcSet
                sizes
                sourceUrl
                mediaType
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
              listaDeMenus {
                nombre
                archivoMenu {
                  altText
                  title
                  srcSet
                  sizes
                  sourceUrl
                  mediaType
                  mediaItemUrl
                  mediaDetails {
                    height
                    width
                  }
                }
              }
              url
              horarios
            }
            restaurantescats {
              nodes {
                name
              }
            }
          }
        }
      }
      bloqueExperiencias {
        supertitulo
        titulo
        texto
        listasDeExperiencias {
          titulo
          texto
          imagen {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          tipoDeUrl
          url
          correo
          listaDeArchivos {
            nombre
            archivo {
              altText
              title
              srcSet
              sizes
              sourceUrl
              mediaType
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
      bloqueSpa {
        supertitulo
        titulo
        texto
        boton1 {
          texto
          tipo
          pagina
          url
          archivo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          correo
        }
        boton2 {
          texto
          tipo
          pagina
          url
          archivo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          correo
        }
        listaDeServicios {
          supertitulo
          titulo
          texto
          imagen {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          boton {
            texto
            tipo
            pagina
            url
            correo
            listaDeArchivos {
              nombre
              archivo {
                altText
                title
                srcSet
                sizes
                sourceUrl
                mediaType
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
      }
      bloqueClasesDegustaciones {
        supertitulo
        titulo
        texto
        listaDeClasesYDegustacion {
          ... on Tasting {
            title
            datosClases {
              descripcion
              imagen {
                altText
                title
                srcSet
                sizes
                sourceUrl
                mediaType
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
              datosModal {
                titulo
                descripcion
                correo
                imagen {
                  altText
                  title
                  srcSet
                  sizes
                  sourceUrl
                  mediaType
                  mediaItemUrl
                  mediaDetails {
                    height
                    width
                  }
                }
                detalles
                textoInformativo
              }
            }
          }
        }
      }
      bloqueRituales {
        supertitulo
        titulo
        texto
        listaCards {
          fecha
          titulo
          texto
          imagen {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
      bloqueClub {
        supertitulo
        titulo
        texto
        fecha
        imagen1 {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        imagen2 {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        imagen3 {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        imagenFinal {
          altText
          title
          srcSet
          sizes
          sourceUrl
          mediaType
          mediaItemUrl
          mediaDetails {
            height
            width
          }
        }
        boton {
          texto
          tipo
          pagina
          url
          archivo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
}
  `)

  return res.data
}

export async function postRestaurantes() {
  const res = await getDataFetch(`
  {
    restaurantes {
      nodes {
        title
        slug
        datosRestaurantes {
          descripcion
          imagen {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          horarios
          archivoMenu {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          url
        }
        restaurantescats {
          nodes {
            name
          }
        }
      }
    }
  }
  `)
  return res.data
}


export async function contactoQuery() {
  const res = await getDataFetch(`
  {
    page(id: "contacto", idType: URI) {
      contacto {
        bloquePrincipal {
          titulo
          descripcion
          direccion
          nombreDireccion
          numeroDeTelefono
          correoDeContacto
          imagen {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        numeroDeWhatsapp
      }
    }
  }
  `)
  return res.data
}

export async function contactEnQuery() {
  const res = await getDataFetch(`
  {
    page(id: "contact", idType: URI) {
      contacto {
        bloquePrincipal {
          titulo
          descripcion
          direccion
          nombreDireccion
          numeroDeTelefono
          correoDeContacto
          imagen {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
        numeroDeWhatsapp
      }
    }
  }
  `)
  return res.data
}

export async function sendMailQuery(data) {
  return await axiosCustom().post('', data)
}

export async function graciasQuery() {
  const res = await getDataFetch(`
  {
    page(id: "gracias", idType: URI) {
      gracias {
        bloquePrincipal {
          titulo
          texto
          imagenFondo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          boton {
            texto
            tipo
            pagina
            url
            archivo {
              altText
              title
              srcSet
              sizes
              sourceUrl
              mediaType
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
    }
  }
  `)
  return res.data
}

export async function thankYouQuery() {
  const res = await getDataFetch(`
  {
    page(id: "thank-you", idType: URI) {
      gracias {
        bloquePrincipal {
          titulo
          texto
          imagenFondo {
            altText
            title
            srcSet
            sizes
            sourceUrl
            mediaType
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          boton {
            texto
            tipo
            pagina
            url
            archivo {
              altText
              title
              srcSet
              sizes
              sourceUrl
              mediaType
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
    }
  }
  `)
  return res.data
}

export async function termsConditionQuery() {
  const res = await getDataFetch(`
  {
    page(id: "terms-and-conditions", idType: URI) {
      datosLegales{
        titulo
        contenido
      }
    }
  }
  `)
  return res.data
}

export async function terminosQuery() {
  const res = await getDataFetch(`
  {
    page(id: "terminos-y-condiciones", idType: URI) {
      datosLegales{
        titulo
        contenido
      }
    }
  }
  `)
  return res.data
}

export async function avisoQuery() {
  const res = await getDataFetch(`
  {
    page(id: "aviso-de-privacidad", idType: URI) {
      datosLegales{
        titulo
        contenido
      }
    }
  }
  `)
  return res.data
}

export async function noticeQuery() {
  const res = await getDataFetch(`
  {
    page(id: "notice-of-privacy", idType: URI) {
      datosLegales {
        titulo
        contenido
      }
    }
  }
  `)
  return res.data
}