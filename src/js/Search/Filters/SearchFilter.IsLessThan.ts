﻿import {PropertyDefinitionBase} from "../../PropertyDefinitions/PropertyDefinitionBase";
import {XmlElementNames} from "../../Core/XmlElementNames";

import {RelationalFilter} from "./SearchFilter.RelationalFilter";
/**
 * Represents a search filter that checks if a property is less than a given value or other property.
 */
export class IsLessThan extends RelationalFilter {

	/**
	 * Initializes a new instance of the **IsLessThan** class.
	 */
	constructor();
	/**
	 * Initializes a new instance of the **IsLessThan** class.
	 *
	 * @param   {PropertyDefinitionBase}   propertyDefinition        The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
	 * @param   {PropertyDefinitionBase}   otherPropertyDefinition   The definition of the property to compare with. Property definitions are available on schema classes (EmailMessageSchema, AppointmentSchema, etc.)
	 */
	constructor(propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase);
	/**
	 * Initializes a new instance of the **IsLessThan** class.
	 *
	 * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
	 * @param   {any}   					value                The value to compare the property with.
	 */
	constructor(propertyDefinition: PropertyDefinitionBase, value: any);
	constructor(propertyDefinition?: PropertyDefinitionBase, otherPropertyDefinitionOrValue?: any | PropertyDefinitionBase) {
		arguments.length === 0 ? super() : super(propertyDefinition, otherPropertyDefinitionOrValue);
	}

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetXmlElementName(): string { return XmlElementNames.IsLessThan; }
}

export interface IIsLessThan {
	new (): IsLessThan;
	new (propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase):IsLessThan;
	new (propertyDefinition: PropertyDefinitionBase, value: any): IsLessThan;
}