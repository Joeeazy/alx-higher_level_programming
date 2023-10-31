#!/usr/bin/python3
"""A lockedClass class is defined."""

 class LockedClass:
     """
     prevents the user from dynamically creating new instance attributes, 
     except if the new instance attribute is called first_nam
     """

     __slots__ = ["first_name"]
