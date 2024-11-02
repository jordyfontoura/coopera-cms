import type { Struct, Schema } from '@strapi/strapi';

export interface DocumentosRelatorio extends Struct.ComponentSchema {
  collectionName: 'components_documentos_relatorios';
  info: {
    displayName: 'Relat\u00F3rio';
    icon: 'archive';
    description: '';
  };
  attributes: {
    nome: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'documentos.relatorio': DocumentosRelatorio;
    }
  }
}
